"use client";
import React, { useReducer } from "react";
import { tasksReducer } from "./reducers/tasks/tasksReducer";
import { ACTION_TYPE } from "./reducers/tasks/actionTypes";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { TaskItem } from "./components/TaskItem";

export interface TaskType {
  id: number,
  text: string,
  done: boolean
}

export default function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  
  const handleAddTask = (text:string) => dispatch({
      type: ACTION_TYPE.ADDED,
      id: nextId++,
      text: text
  });
  
  const handleChangeTask = (task:TaskType) => dispatch({
      type: ACTION_TYPE.CHANGED,
      task: task
  });
  
  const handleDeleteTask = (taskId:number) => dispatch({
      type: ACTION_TYPE.DELETED,
      id: taskId
  });
  
  const completedTasks:number = tasks.filter(task => !!task.done).length;

  const renderTasks: React.JSX.Element[] = tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
  ));

  return (
    <>
      <h1 className="title">Prague itinerary, total tasks {tasks.length}</h1>
      <h2>You've completed {completedTasks} {completedTasks > 1 ? 'tasks':'task'}</h2>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList>
          {renderTasks}
      </TaskList>
    </>
  );
}

let nextId: number = 3;

const initialTasks: TaskType[] = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


