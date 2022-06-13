import { useState } from 'react';
import styles from '../styles/task-modal.module.css';

const SignupModal = ({ setShowSignupModal }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(undefined);
    const [success, setSuccess] = useState(undefined);

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
            if (data === "CREATED") {
                setSuccess(true)
                setTimeout(() => {
                    setShowSignupModal(false)
                }, 1000)
            } else {
                if (data === "ERROR") setError("Error occurred")
                return
            }
        } catch (err) {
            setError("Error occurred");
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
                {error && <span className={styles.errorMessage}>{error}</span>}
                {success && <span className={styles.successMessage}>Signup Successfull</span>}
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