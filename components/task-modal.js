import { useState } from 'react';
import styles from '../styles/task-modal.module.css';
const { useAuth } = require('../context/auth-context');

const TaskModal = ({ setShowModal, fetchTasks }) => {
    const [value, setValue] = useState();
    const { user, setUser } = useAuth();
    const [ error, setError ] = useState(undefined);

    const addNewTask = async () => {
        try {
            const res = await fetch(`${process.env.API_END_POINT}task`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${user.token}`
                },
                body: JSON.stringify({
                    task: value
                })
            });
            const data = await res.json();
            if (data === "ADDED") {
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
                    placeholder='Add new task'
                    className={styles.addItemInput}
                    onChange={(e) => setValue(e.target.value)}
                    data-testid="add-task-input"
                />
                 {error && <span className={styles.errorMessage}>{error}</span>}
                <div className={styles.addItemButtonDiv}>
                    <button disabled={!value}
                        onClick={() => addNewTask()}
                        className={styles.addItemButton}>
                        ADD
                    </button>
                    <button onClick={() => setShowModal(false)} className={styles.addItemButton}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default TaskModal;