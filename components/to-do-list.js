import {useState} from 'react'
import styles from '../styles/to-do-list.module.css';
import TodoItem from '../components/to-do-item';

const TodoList = ({tasks}) => {
    const [taskList, setTaskList] = useState(tasks)
    
    const TODOLIST = taskList.filter(task => task.status === "TODO");
    const INGOINGLIST = taskList.filter(task => task.status === "INGOING");
    const DONELIST = taskList.filter(task => task.status === "DONE");


    const editTask = (editedTask) => {
        console.log("edited");
    }

    const deletetask = (taskId) => {
        const deletedTaskList = taskList.filter(task => task.id !== taskId);
        setTaskList(deletedTaskList);
    }

    return (
        <div className={ styles.container }>
            <div className={`${styles.section} ${styles.todo}` }>
                <p className={styles.sectionTitle}>Todo Tasks</p>
                {TODOLIST.map(item => (
                    <TodoItem key={item.id} item={item} editTask={editTask} deletetask={deletetask}/>
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Ongoing Tasks</p>
                {INGOINGLIST.map(item => (
                    <TodoItem key={item.id}  item={item} editTask={editTask} deletetask={deletetask}/>
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Completed Tasks</p>
                {DONELIST.map(item => (
                    <TodoItem key={item.id}  item={item} editTask={editTask} deletetask={deletetask}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;