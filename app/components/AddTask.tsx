import React, { useState } from "react";
import { useDipatchContext } from "../context/TasksContext";
import { TaskAction } from "../reducers/tasks/tasksReducer";
import { ACTION_TYPE } from "../reducers/tasks/actionTypes";

export const AddTask = () => {
  const dispatch: React.Dispatch<TaskAction> = useDipatchContext();
  const [text, setText] = useState("");

  const onTextChange = (e:React.ChangeEvent<HTMLInputElement>): void => { 
    setText(e.target.value); 
  }

  const onAddTask = (): void => {
    if(text) {
      dispatch({
        type: ACTION_TYPE.ADDED,
        id: nextId++,
        text: text
      });
      setText("");
    }
  }

  return (
    <article>
        <input 
          type="text" 
          placeholder="Add task"
          value={text}
          onChange={onTextChange}
        />{' '}
        <button onClick={onAddTask}>Add</button>
    </article>
  );
}

let nextId: number = 3;
