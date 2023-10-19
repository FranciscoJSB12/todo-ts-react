import { useTasks } from "../context/TasksContext";
import type { TaskType } from "../context/TasksContext";

export const TaskHeader = () => {
    const tasks: TaskType[] = useTasks();
    const completedTasks: number = tasks.filter(t => !!t.done).length;

    return (
        <>
            <h1>Prague itinerary, total tasks {tasks.length}</h1>
            <h2>You've completed {completedTasks} {completedTasks === 1 ? 'task':'tasks'}</h2>
        </>
    );
}