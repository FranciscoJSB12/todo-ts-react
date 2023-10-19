import React from "react";
import type { TaskType } from "../context/TasksContext";
import { Task  } from "./Task";
import { useTasks } from "../context/TasksContext";

export const TaskList = () => {
    const tasks: TaskType[] = useTasks();
    const viewTasks: React.JSX.Element[] = tasks.map(t => <Task key={t.id} task={t}/>);
    
    return (
        <article>
            {viewTasks}
        </article>
    );
}