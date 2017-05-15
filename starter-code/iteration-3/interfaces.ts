// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
import {TodoItem} from './main';

export interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  statusToggle():void;
}

export interface TodoListInterface {
  items: Array<TodoItem>;
  addTask(TodoItem): Number;
  listAllTasks();
  deleteTask(TodoItem): Number;
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
