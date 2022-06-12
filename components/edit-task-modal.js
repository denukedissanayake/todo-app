import { useState } from 'react';
import styles from '../styles/task-modal.module.css';
const { useAuth } = require('../context/auth-context');

const EditTaskModal = ({ item, setShowModal, fetchTasks }) => {
    const [value, setValue] = useState()
    const { user } = useAuth();

    const editTask = async (taskId, task) => {
        try {
            const res = await fetch(`http://localhost:3050/api/task/${taskId}`, {
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
            console.log(data);
            fetchTasks()
            setShowModal(false)
        } catch (err) {
            console.log(err);
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