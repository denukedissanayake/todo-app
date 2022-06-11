import { useState } from 'react';
import styles from '../styles/task-modal.module.css';

const TaskModal = ({ setNewtask, setShowModal }) => {
    const [value, setValue] = useState()

    return (
        <div className={styles.modalContainer}>
            <div className={styles.addItemContainer}>
                <span className={styles.addItemTitle}>Add New Todo Item</span>
                <input
                    placeholder='Add new task'
                    className={styles.addItemInput}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className={styles.addItemButtonDiv}>
                    <button disabled={!value}
                        onClick={() => {
                            setNewtask(value)
                            setShowModal(false)
                        }}
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