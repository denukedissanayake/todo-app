import {useState, useEffect} from 'react'
import Head from 'next/head';
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

  const fetchAllTasks = async () => {
    try {
        const res = await fetch(`http://localhost:3050/api/task`);
        // console.log(res)
        const data = await res.json();
        setTasks(data)
    } catch (err) {
        console.log(err);
    }
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
      <TodoList tasks={tasks} fetchTasks={fetchAllTasks} />
      {showAddTaskModal && <TaskModal setShowModal={setShowAddTaskModal} fetchTasks={fetchAllTasks} />}
      {showLoginModal && <LoginModal setShowLoginsModal={setShowLoginsModal} fetchTasks={fetchAllTasks} />}
      {showSignupModal && <SignupModal setShowSignupModal={setShowSignupModal} fetchTasks={fetchAllTasks} />}
    </>
  )
}
