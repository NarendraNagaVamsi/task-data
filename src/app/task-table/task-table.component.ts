// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { TaskService, Task } from './task.service';

// @Component({
//   selector: 'app-task-table',
//   templateUrl: './task-table.component.html',
// })
// export class TaskTableComponent implements OnInit {
//   tasks: Task[] = [];
//   statusToggle: any | null = null;

//   constructor(private taskService: TaskService, private router: Router) {}

//   ngOnInit(): void {
//     this.loadTasks();
//   }

//   toggleStatusSection(index: number): void {
//     this.statusToggle = this.statusToggle === index ? null : index;
//   }

//   loadTasks(): void {
//     const originalTasks = this.taskService.getTasks();
//     this.tasks = originalTasks.map((task) => ({
//       ...task,
//       tempStatus: task.status,
//     }));
//     this.statusToggle = this.tasks.map(() => false);
//   }

//   // toggleStatusSection(index: number): void {
//   //   this.statusToggle[index] = !this.statusToggle[index];
//   // }

//   updateTaskStatus(index: number): void {
//     const task = this.tasks[index];
//     if (task.tempStatus !== task.status) {
//       task.status = task.tempStatus!;
//       this.taskService.updateTask(index, task);
//     }
//   }

//   deleteTask(index: number): void {
//     this.taskService.deleteTask(index);
//     this.loadTasks();
//   }

//   editTask(index: number): void {
//     this.router.navigate(['/create', index]);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchText: string = '';
  statusToggle: any | null = null;
  searchTaskId: any = '';
  searchDescription: any = '';
  searchStatus: any = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    const originalTasks = this.taskService.getTasks();
    this.tasks = originalTasks.map((task) => ({
      ...task,
      tempStatus: task.status,
    }));
    this.filteredTasks = [...this.tasks];
  }
  clearSearchFilters(): void {
    this.searchTaskId = '';
    this.searchDescription = '';
    this.searchStatus = '';
  }

  applySearch(): void {
    this.filteredTasks = [...this.tasks];
  }

  toggleStatusSection(index: number): void {
    this.statusToggle = this.statusToggle === index ? null : index;
  }

  updateTaskStatus(index: number): void {
    const task = this.tasks[index];
    if (task.tempStatus !== task.status) {
      task.status = task.tempStatus!;
      this.taskService.updateTask(index, task);
    }
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.loadTasks();
  }

  editTask(index: number): void {
    this.router.navigate(['/create', index]);
  }
}
