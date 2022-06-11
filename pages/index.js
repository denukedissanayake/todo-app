import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TodoList from '../components/to-do-list';
import Navbar from '../components/navigation-bar';
import TaskModal from '../components/task-modal';

export default function Home() {
  const tasksList = [
    {
      id: "1",
      task: "Complete the task before tuesday",
      status: "TODO",
    },
    {
      id: "2",
      task: "Go shopping",
      status: "INGOING",
    },
    {
      id: "3",
      task: "Buy Milk",
      status: "DONE",
    },
    {
      id: "4",
      task: "Study for the end Exam",
      status: "TODO",
    },
  ]

  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(tasksList);
  
  const setNewtask = (task) => {
    const newTask = {
      id: Math.random() * 10,
      task,
      status: "TODO",
    }
    console.log(newTask)
    setTasks([...tasksList, newTask]);
  }

  return (
    <>
      <Head>
        <title>Todo | App</title>
      </Head>
      <Navbar setShowModal={setShowModal} />
      <TodoList tasks={tasks} />
      {showModal && <TaskModal setNewtask={setNewtask} setShowModal={setShowModal}/>}
    </>
  )
}
