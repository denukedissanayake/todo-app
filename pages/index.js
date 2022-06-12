import {useState, useEffect} from 'react'
import Head from 'next/head';
import TodoList from '../components/to-do-list';
import Navbar from '../components/navigation-bar';
import TaskModal from '../components/task-modal';

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false);

  const fetchAllTasks = async () => {
    try {
        const res = await fetch(`http://localhost:3050/api/task`);
        console.log(res)
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
      <Navbar setShowModal={setShowModal} />
      <TodoList tasks={tasks} fetchTasks={fetchAllTasks} />
      {showModal && <TaskModal setShowModal={setShowModal} fetchTasks={fetchAllTasks} />}
    </>
  )
}
