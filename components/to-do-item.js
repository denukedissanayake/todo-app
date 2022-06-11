import styles from '../styles/to-do-item.module.css';

const TodoItem = (task) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.task}>
                <label className={styles.taskTitle}>Complete the Task before Tuesday</label>
            </div>
            <div className={styles.taskAction}>
                <button className={styles.taskButton}>EDIT</button>
                <button className={styles.taskButton}>DELETE</button>
                <span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Ongoing" onChange={(e) => { console.log(e.target.value) }} />
                    START
                </span>
                <span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Todo" onChange={(e) => { console.log(e.target.value) }} />
                    PAUSE
                </span>
                <span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Complete" onChange={(e) => { console.log(e.target.value) }} />
                    DONE
                </span>
            </div>
        </div>
    )
}

export default TodoItem;