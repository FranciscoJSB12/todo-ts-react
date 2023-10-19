import React, { useState } from "react";
import type { TaskType } from "../context/TasksContext";
import { ACTION_TYPE } from "../reducers/tasks/actionTypes";
import { TaskAction } from "../reducers/tasks/tasksReducer";
import { useDipatchContext } from "../context/TasksContext";

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
  
  let taskContent: React.JSX.Element;
  
  if (isEditing) {
    taskContent = (<>
       <input 
          type="text" 
          value={task.text}
          onChange={onChangeText}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
    </>);
  } else {
    taskContent = (<>
       <label 
            htmlFor={`task${task.id}`}
        >{task.text}</label>{' '}
        <button onClick={() => setIsEditing(true)}>Edit</button>{' '}
    </>);
  }

  return (
    <div>
        <input 
            type="checkbox" 
            id={`task${task.id}`} 
            name={`task${task.id}`}
            checked={task.done}
            onChange={onChangeCheck}
        />
        {taskContent}
        <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
}