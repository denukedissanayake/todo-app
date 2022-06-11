import styles from '../styles/to-do-item.module.css';

const TodoItem = ({ item, editTask, deletetask }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.task}>
                <label className={styles.taskTitle}>{item.task}</label>
            </div>
            <div className={styles.taskAction}>
                <button className={styles.taskButton} onClick={editTask}>EDIT</button>
                <button className={styles.taskButton} onClick={() => deletetask(item.id)}>DELETE</button>
                {item.status === "TODO" && <span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Ongoing" onChange={(e) => { console.log(e.target.value) }} />
                    START
                </span>}
                {item.status === "DONE" &&<span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Todo" onChange={(e) => { console.log(e.target.value) }} />
                    RE-START
                </span>}
                {item.status === "INGOING" &&<span className={styles.taskProgress}>
                    <input type="checkbox" name="status" value="Complete" onChange={(e) => { console.log(e.target.value) }} />
                    DONE
                </span>}
            </div>
        </div>
    )
}

export default TodoItem;