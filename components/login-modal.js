import { useState } from 'react';
import styles from '../styles/task-modal.module.css';
const { useAuth } = require('../context/auth-context');

  /* 
    User Login modal
  */

const LoginModal = ({ setShowLoginsModal }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { user, setUser } = useAuth();
    const [ error, setError ] = useState(undefined);

    /* 
        Data function to Login users
    */
    const userLogin = async () => {
        try {
            const res = await fetch(`${process.env.API_END_POINT}user/login`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            const data = await res.json();
            /* 
                Set user token to context if login is succesfull
            */
            if (data !== "NOT-FOUND" && data !== "INVALID-PASSWORD" && data !== "ERROR") {
                setUser({token: data})
                setShowLoginsModal(false)
            } else {
                if (data === "NOT-FOUND") setError("Please check your username")
                else if (data === "INVALID-PASSWORD") setError("Invaild password")
                else setError("Error occurred")
                return
            }
        } catch (err) {
            setError("Error occurred");
        }
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.addItemContainer}>
                <span className={styles.addItemTitle}>Login</span>
                <input
                    placeholder='Enter Email'
                    className={styles.addItemInput}
                    onChange={(e) => setUsername(e.target.value)}
                    data-testid="login-email-input"
                />
                <input
                    placeholder='Enter Password'
                    className={styles.addItemInput}
                    onChange={(e) => setPassword(e.target.value)}
                    data-testid="login-password-input"
                />
                {error && <span className={styles.errorMessage}>{error}</span>}
                <div className={styles.addItemButtonDiv}>
                    <button disabled={!username || !password}
                        onClick={() => userLogin()}
                        className={styles.addItemButton}>
                        LOGIN
                    </button>
                    <button onClick={() => setShowLoginsModal(false)} className={styles.addItemButton}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;