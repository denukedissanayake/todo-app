import styles from '../styles/to-do-list.module.css';
import TodoItem from '../components/to-do-item';
const { useAuth } = require('../context/auth-context');

  /* 
    Todo List component display all the available tasks 
  */

const TodoList = ({ tasks, fetchTasks }) => {
    const { user } = useAuth();

    const TODOLIST = tasks.filter(task => task.status === "TODO");
    const INGOINGLIST = tasks.filter(task => task.status === "INGOING");
    const DONELIST = tasks.filter(task => task.status === "DONE");

    /* 
        Data function to delete tasks from the Database
    */

    const deletetask = async (taskId) => {
        try {
            const res = await fetch(`${process.env.API_END_POINT}task/${taskId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${user.token}`
                },
            });
            const data = await res.json();
            if(data === "DELETED") fetchTasks()
        } catch (err) {}
    };

    /* 
        Data function to change the task's status START --> INGOING --> DONE --> RE-START from the Database
    */
    
    const changeTaskStatus = async (taskId, newStatus) => {
        try {
            const res = await fetch(`${process.env.API_END_POINT}task/status/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            const data = await res.json();
            if(data === "CHANGED") fetchTasks()    
        } catch (err) {}
    };

    return (
        <div className={ styles.container }>
            <div className={`${styles.section} ${styles.todo}` }>
                <p className={styles.sectionTitle}>Todo Tasks</p>
                {TODOLIST.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        deletetask={deletetask}
                        changeTaskStatus={changeTaskStatus}
                        fetchTasks={fetchTasks}
                    />
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Ongoing Tasks</p>
                {INGOINGLIST.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        deletetask={deletetask}
                        changeTaskStatus={changeTaskStatus}
                        fetchTasks={fetchTasks}
                    />
                ))}
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Completed Tasks</p>
                {DONELIST.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        deletetask={deletetask}
                        changeTaskStatus={changeTaskStatus}
                        fetchTasks={fetchTasks}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;