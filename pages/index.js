import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/to-do-list'

export default function Home() {

  return (
    <>
      <Head>
        <title>Todo | App</title>
      </Head>
      <TodoList />
    </>
  )
}
