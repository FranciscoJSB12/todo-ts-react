import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (text: string) => void
}

export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [text, setText] = useState("");

  const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
    setText(e.target.value); 
  }

  const handleAddTask = () => {
    if(text) {
      onAddTask(text);
      setText("");
    }
  }

  return (
    <section>
        <input 
          type="text" 
          placeholder="Add task"
          value={text}
          onChange={handleTextChange}
        />{' '}
        <button onClick={handleAddTask}>Add</button>
    </section>
  );
}
