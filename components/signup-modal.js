import { useState } from 'react';
import styles from '../styles/task-modal.module.css';
const { useAuth } = require('../context/auth-context');

const SignupModal = ({ setShowSignupModal, fetchTasks }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { user, setUser } = useAuth();

    const userSignup = async () => {
        try {
            const res = await fetch(`http://localhost:3050/api/user/signup`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            const data = await res.json();
            console.log(data)
            // setUser({token: data})
            setShowSignupModal(false)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.addItemContainer}>
                <span className={styles.addItemTitle}>Signup</span>
                <input
                    placeholder='Enter Email'
                    className={styles.addItemInput}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder='Enter Password'
                    className={styles.addItemInput}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.addItemButtonDiv}>
                    <button disabled={!username || !password}
                        onClick={() => userSignup()}
                        className={styles.addItemButton}>
                        SIGNUP
                    </button>
                    <button onClick={() => setShowSignupModal(false)} className={styles.addItemButton}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default SignupModal;