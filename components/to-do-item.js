import { useState, useEffect } from 'react';
import styles from '../styles/to-do-item.module.css';
import EditTaskModal from './edit-task-modal';
const { useAuth } = require('../context/auth-context');

const TodoItem = ({ item, deletetask, changeTaskStatus,fetchTasks }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const { user } = useAuth();
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        user ? setAuth(true) : setAuth(false)
    })

    return (
        <>
            <div className={styles.itemContainer}>
                <div className={styles.task}>
                    <label className={styles.taskTitle}>{item.task}</label>
                </div>
                <div className={styles.taskAction}>
                    {auth && <button className={styles.taskButton} onClick={() => setShowEditModal(true)}>EDIT</button>}
                    {auth && <button className={styles.taskButton} onClick={() => deletetask(item.id)}>DELETE</button>}
                    {item.status === "TODO" && <span className={styles.taskProgress}>
                        <input
                            type="checkbox"
                            name="status"
                            value="INGOING"
                            onChange={(e) => { changeTaskStatus(item.id, e.target.value) }}
                        />
                        START
                    </span>}
                    {item.status === "DONE" && <span className={styles.taskProgress}>
                        <input
                            type="checkbox"
                            name="status"
                            value="INGOING"
                            onChange={(e) => { changeTaskStatus(item.id, e.target.value) }}
                        />
                        RE-START
                    </span>}
                    {item.status === "INGOING" && <span className={styles.taskProgress}>
                        <input
                            type="checkbox"
                            name="status"
                            value="DONE"
                            onChange={(e) => { changeTaskStatus(item.id, e.target.value) }}
                        />
                        DONE
                    </span>}
                </div>
            </div>
            {showEditModal && <EditTaskModal item={item} fetchTasks={fetchTasks} setShowModal={setShowEditModal}/> }
        </>
    )
}

export default TodoItem;