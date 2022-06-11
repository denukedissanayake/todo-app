import styles from '../styles/navigation-bar.module.css';

const Navbar = ({setShowModal}) => {

    return (
        <>
            <div className={styles.container}>
                <div className="logo">
                    <h3>ToDo-App</h3>
                </div>
                <div className={styles.buttonslist}>
                    <p className={styles.button} onClick={() => setShowModal(true)}>ADD TASK</p>
                    <p className={styles.button}>LOGIN</p>
                    <p className={styles.button}>LOGOUT</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;