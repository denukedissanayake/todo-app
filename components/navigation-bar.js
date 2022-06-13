import { useState, useEffect } from 'react';
import styles from '../styles/navigation-bar.module.css';
const { useAuth } = require('../context/auth-context');

  /* 
    Navigation-bar component
  */
const Navbar = ({ showAddTaskModal, setShowLoginsModal, setShowSignupModal }) => {
    const { user, setUser } = useAuth();
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        user ? setAuth(true) : setAuth(false)
    })

    /* 
        Removes user from Local Storage when logout & set user context to undefined
    */

    const logout = () => {
        localStorage.removeItem('user');
        setUser(undefined)
    }

    return (
        <>
            <div className={styles.container}>
                <div className="logo">
                    <h3>ToDo-App</h3>
                </div>
                <div className={styles.buttonslist}>
                    {auth && <p className={styles.button} onClick={() => showAddTaskModal(true)}>ADD TASK</p>}
                    {!auth && <p className={styles.button} onClick={() => setShowLoginsModal(true)}>LOGIN</p>}
                    {!auth && <p className={styles.button} onClick={() => setShowSignupModal(true)}>SIGNUP</p>}
                    {auth && <p className={styles.button} onClick={logout}>LOGOUT</p>}
                </div>
            </div>
        </>
    );
}

export default Navbar;