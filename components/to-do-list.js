import styles from '../styles/to-do-list.module.css';
import TodoItem from '../components/to-do-item';

const TodoList = () => {
    return (
        <div className={ styles.container }>
            <div className={`${styles.section} ${styles.todo}` }>
                <p className={styles.sectionTitle}>Todo Tasks</p>
                <TodoItem />
                <TodoItem />
                <TodoItem/>
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Ongoing Tasks</p>
                <TodoItem />
                <TodoItem/>
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Completed Tasks</p>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem/>
            </div>
        </div>
    )
}

export default TodoList;