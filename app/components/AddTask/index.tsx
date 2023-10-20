import React, { useState } from "react";
import { useDipatchContext } from "../../context/TasksContext";
import type { TaskAction } from "../../reducers/tasks/tasksReducer";
import { ACTION_TYPE } from "../../reducers/tasks/actionTypes";
import styles from "./AddTask.module.css";

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

  const onAddTaskByEnter = (e: React.KeyboardEvent<HTMLInputElement>):void => {
    if (e.key === "Enter") {
      onAddTask();
    }
  }

  return (
    <section className={styles.AddTaskSection}>
        <input 
          type="text" 
          placeholder="Add task"
          value={text}
          onChange={onTextChange}
          onKeyDown={onAddTaskByEnter}
          className={styles.AddTaskInput}
        />{' '}
        <button 
          onClick={onAddTask}
          className={styles.AddTaskButton}  
        >Add</button>
    </section>
  );
}

let nextId: number = 3;
