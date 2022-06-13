import {useState, useEffect} from 'react'
import Head from 'next/head';
import styles from '../styles/index.module.css';
import TodoList from '../components/to-do-list';
import Navbar from '../components/navigation-bar';
import TaskModal from '../components/task-modal';
import LoginModal from '../components/login-modal';
import SignupModal from '../components/signup-modal';

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showLoginModal, setShowLoginsModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  /* 
    Data function to fetch all the tasks from the Database
  */
  const fetchAllTasks = async () => {
    try {
        const res = await fetch(`${process.env.API_END_POINT}task`);
        const data = await res.json();
        setTasks(data)
    } catch (err) {}
  };
    
  useEffect(() => {
      fetchAllTasks();
  }, [])

  return (
    <>
      <Head>
        <title>Todo | App</title>
      </Head>
      <Navbar showAddTaskModal={setShowAddTaskModal} setShowLoginsModal={setShowLoginsModal} setShowSignupModal={setShowSignupModal}/>
      {tasks.length > 0 ?
        <TodoList tasks={tasks} fetchTasks={fetchAllTasks} /> :
        <p className={styles.noTaskMessage}>No tasks available. Please add tasks</p>}
      {showAddTaskModal && <TaskModal setShowModal={setShowAddTaskModal} fetchTasks={fetchAllTasks} />}
      {showLoginModal && <LoginModal setShowLoginsModal={setShowLoginsModal} fetchTasks={fetchAllTasks} />}
      {showSignupModal && <SignupModal setShowSignupModal={setShowSignupModal} fetchTasks={fetchAllTasks} />}
    </>
  )
}
