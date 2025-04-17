import { Injectable } from '@angular/core';

export interface Task {
  taskid: string;
  description: string;
  status: 'Pending' | 'Success';
  tempStatus?: 'Pending' | 'Success';
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { taskid: '1', description: 'Prepare report', status: 'Pending' },
    { taskid: '2', description: 'Fix login bug', status: 'Success' },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(index: number): Task | undefined {
    return this.tasks[index];
  }

  updateTask(index: number, updatedTask: Task): void {
    this.tasks[index] = updatedTask;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
