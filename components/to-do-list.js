import styles from '../styles/to-do-list.module.css';
import TodoItem from '../components/to-do-item';

const TodoList = () => {
    const taskList = [
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
    
    const TODOLIST = taskList.filter(task => task.status === "TODO");
    const INGOINGLIST = taskList.filter(task => task.status === "INGOING");
    const DONELIST = taskList.filter(task => task.status === "DONE");

    return (
        <div className={ styles.container }>
            <div className={`${styles.section} ${styles.todo}` }>
                <p className={styles.sectionTitle}>Todo Tasks</p>
                {TODOLIST.map(item => (
                    <TodoItem key={item.id} item={item} />
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Ongoing Tasks</p>
                {INGOINGLIST.map(item => (
                    <TodoItem key={item.id}  item={item} />
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Completed Tasks</p>
                {DONELIST.map(item => (
                    <TodoItem key={item.id}  item={item} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;