import { useState, useEffect } from 'react';
import styles from '../styles/navigation-bar.module.css';
const { useAuth } = require('../context/auth-context');

const Navbar = ({ showAddTaskModal, setShowLoginsModal }) => {
    const { user } = useAuth();
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        user ? setAuth(true) : setAuth(false)
    })

    return (
        <>
            <div className={styles.container}>
                <div className="logo">
                    <h3>ToDo-App</h3>
                </div>
                <div className={styles.buttonslist}>
                    {auth && <p className={styles.button} onClick={() => showAddTaskModal(true)}>ADD TASK</p>}
                    {!auth && <p className={styles.button} onClick={() => setShowLoginsModal(true)}>LOGIN</p>}
                    {auth && <p className={styles.button}>LOGOUT</p>}
                </div>
            </div>
        </>
    );
}

export default Navbar;