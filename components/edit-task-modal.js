import { useState } from 'react';
import styles from '../styles/task-modal.module.css';
const { useAuth } = require('../context/auth-context');

/* 
    Edit task modal
*/
const EditTaskModal = ({ item, setShowModal, fetchTasks }) => {
    const [value, setValue] = useState()
    const { user } = useAuth();
    const [error, setError] = useState(undefined);
    

    /* 
        Data function to edit task in the database
    */
    const editTask = async (taskId, task) => {
        try {
            const res = await fetch(`${process.env.API_END_POINT}task/task/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${user.token}`
                },
                body: JSON.stringify({
                    task: task,
                })
            });
            const data = await res.json();
            if (data === "UPDATED") {
                fetchTasks()
                setShowModal(false)
            } else {
                setError("Error occurred")
                setTimeout(() => {
                    setShowModal(false)
                }, 1000)
            }
        } catch (err) {
            setError("Error occurred")
            setTimeout(() => {
                setShowModal(false)
            }, 1000)
        }
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.addItemContainer}>
                <span className={styles.addItemTitle}>Add New Todo Item</span>
                <input
                    placeholder='Edit this task'
                    className={styles.addItemInput}
                    onChange={(e) => setValue(e.target.value)}
                    defaultValue={item.task}
                />
                {error && <span className={styles.errorMessage}>{error}</span>}
                <div className={styles.addItemButtonDiv}>
                    <button disabled={!value || value === item.task}
                        onClick={() => editTask(item.id, value)}
                        className={styles.addItemButton}>
                        EDIT
                    </button>
                    <button onClick={() => setShowModal(false)} className={styles.addItemButton}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default EditTaskModal;