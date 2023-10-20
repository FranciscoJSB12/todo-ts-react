import React from "react";
import type { TaskType } from "../../context/TasksContext";
import { Task  } from "../Task";
import { useTasks } from "../../context/TasksContext";
import styles from "./TaskList.module.css";

export const TaskList = () => {
    const tasks: TaskType[] = useTasks();
    const viewTasks: React.JSX.Element[] = tasks.map(t => <Task key={t.id} task={t}/>);
    
    return (
        <section className={styles.TaskListSection}>
            {viewTasks}
        </section>
    );
}