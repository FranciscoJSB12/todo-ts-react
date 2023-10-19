"use client";
import { TasksProvider } from "../context/TasksContext";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import styles from "./TaskApp.module.css";

export const TaskApp = () => {

  return (
      <TasksProvider>
        <main className={styles.main}>
          <TaskHeader/>
          <AddTask/>
          <TaskList/>
        </main>
      </TasksProvider>
  );
}

