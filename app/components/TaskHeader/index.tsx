import { useTasks } from "../../context/TasksContext";
import type { TaskType } from "../../context/TasksContext";
import styles from "./TaskHeader.module.css"

export const TaskHeader = () => {
    const tasks: TaskType[] = useTasks();
    const completedTasks: number = tasks.filter(t => !!t.done).length;

    return (
        <>
            <h1 className={styles.TaskHeaderTitle}>To-do List</h1>
            <p>Total tasks {tasks.length}</p>
            <h2 className={styles.TaskHeaderSubTitle}>You've completed {completedTasks} {completedTasks === 1 ? 'task':'tasks'}</h2>
        </>
    );
}