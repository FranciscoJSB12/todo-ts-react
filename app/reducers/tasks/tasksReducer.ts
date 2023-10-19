import type { TaskType } from "../../context/TasksContext";
import { ACTION_TYPE } from "./actionTypes";

export type TaskAction = 
  | { type: ACTION_TYPE.ADDED, id: number, text:string}
  | { type: ACTION_TYPE.CHANGED, task: TaskType}
  | { type: ACTION_TYPE.DELETED, id: number}

export const tasksReducer = (tasks: TaskType[], action:TaskAction) => {
    switch(action.type) {
      case ACTION_TYPE.ADDED: {
        return [
          ...tasks, 
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ];
      }
      case ACTION_TYPE.CHANGED: {
        return tasks.map((t) => {
          if (t.id !== action.task.id) {
            return t;
          } else {
            return action.task;
          }
        });
      }
      case ACTION_TYPE.DELETED: {
        return tasks.filter(task => task.id !== action.id);
      }
      default: {
        throw Error("Unknown action");
      }
    }
}