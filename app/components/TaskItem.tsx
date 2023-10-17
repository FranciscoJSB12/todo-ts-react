import React, { useState } from "react";
import { TaskType } from "../page";

interface TaskItemProps {
  task: TaskType,
  onDeleteTask: (id: number) => void,
  onChangeTask: (newTask: TaskType) => void
}

export const TaskItem = (props:TaskItemProps) => {
  const { task, 
          onDeleteTask, 
          onChangeTask 
        } = props;

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeText = (e:React.ChangeEvent<HTMLInputElement>) => onChangeTask({...task, text: e.target.value});

  const handleChangeCheck = (e:React.ChangeEvent<HTMLInputElement>) => onChangeTask({...task, done: e.target.checked});

  const handleDeleteTask = () => onDeleteTask(task.id);
  
  let taskContent: React.JSX.Element;
  
  if (isEditing) {
    taskContent = (<>
       <input 
          type="text" 
          value={task.text}
          onChange={handleChangeText}
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
            onChange={handleChangeCheck}
        />
        {taskContent}
        <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}