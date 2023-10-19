import React, { createContext, useReducer, useContext } from "react";
import { TaskAction } from "../reducers/tasks/tasksReducer";
import { tasksReducer } from "../reducers/tasks/tasksReducer";

export interface TaskType {
    id: number,
    text: string,
    done: boolean
}

interface TasksProviderProps {
    children: React.ReactNode
}

const initialTasks: TaskType[] = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export const TasksContext = createContext<TaskType[] | null>(null);
export const TasksDispatchContext = createContext<React.Dispatch<TaskAction> | null>(null);

export const TasksProvider = ({ children }:TasksProviderProps) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export const useTasks = ():TaskType[] => {
    const context = useContext(TasksContext);
    if (!context) {
        throw Error('Error in TasksContext');
    }
    return context;
}

export const useDipatchContext = ():React.Dispatch<TaskAction> => {
    const context = useContext(TasksDispatchContext);
    if (!context) {
        throw Error('Error in TasksDipatchContext');
    }
    return context;
}


