import React, { useState } from "react";
import type { TaskType } from "../../context/TasksContext";
import { ACTION_TYPE } from "../../reducers/tasks/actionTypes";
import type { TaskAction } from "../../reducers/tasks/tasksReducer";
import { useDipatchContext } from "../../context/TasksContext";
import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType
}

export const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch: React.Dispatch<TaskAction> = useDipatchContext();

  const dispatchChange = (newTask: TaskType): void => dispatch({
    type: ACTION_TYPE.CHANGED,
    task: newTask
  });
  
  const onChangeText = (e:React.ChangeEvent<HTMLInputElement>): void => {
    const newTask = {...task, text: e.target.value};
    dispatchChange(newTask);
  }

  const onChangeCheck = (e:React.ChangeEvent<HTMLInputElement>): void => {
    const newTask = {...task, done: e.target.checked};
    dispatchChange(newTask);
  }

  const onDeleteTask = (): void => { 
    dispatch({
      type: ACTION_TYPE.DELETED,
      id: task.id
    }); 
  }
  
  const onSaveTaskByEnter = (e: React.KeyboardEvent<HTMLInputElement>):void => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  }

  const choseButtons = (button: React.JSX.Element): React.JSX.Element => {
    return (
      <div>
        {button}
        <button 
          onClick={onDeleteTask}
          className={styles.TaskButton}
        >Delete</button>
      </div>
    );
  }
  
  let taskContent: React.JSX.Element;
  let neededButton: React.JSX.Element;
  
  if (isEditing) {
    neededButton = (
      <button 
        onClick={() => setIsEditing(false)}
        className={styles.TaskButton}
      >Save</button>
    );

    taskContent = (<>
       <input 
          type="text" 
          value={task.text}
          onChange={onChangeText}
          onKeyDown={onSaveTaskByEnter}
          className={styles.TaskEdit}
        />
        {choseButtons(neededButton)}
    </>);
  } else {
    neededButton = (
      <button 
        onClick={() => setIsEditing(true)}
        className={styles.TaskButton}
      >Edit</button>
    );

    taskContent = (<>
       <label 
            htmlFor={`task${task.id}`}
        >{task.text}</label>
        {choseButtons(neededButton)}
    </>);
  }

  return (
    <div className={styles.TaskContainer}>
        <input 
            type="checkbox" 
            id={`task${task.id}`} 
            name={`task${task.id}`}
            checked={task.done}
            onChange={onChangeCheck}
        />
        {taskContent}
    </div>
  );
}