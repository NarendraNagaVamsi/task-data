import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService, Task } from '../task-table/task.service';

@Component({
  selector: 'app-createdata',
  templateUrl: './createdata.component.html',
  styleUrls: ['./createdata.component.scss'],
})
export class CreatedataComponent {
  taskid: string = '';
  description: string = '';
  status: 'Pending' | 'Success' = 'Pending';
  editIndex: number | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const index = Number(id);
      const task = this.taskService.getTask(index);
      if (task) {
        this.taskid = task.taskid;
        this.description = task.description;
        this.status = task.status;
        this.editIndex = index;
      }
    }
  }

  addData() {
    const task: Task = {
      taskid: this.taskid,
      description: this.description,
      status: this.status,
    };

    if (this.editIndex !== null) {
      this.taskService.updateTask(this.editIndex, task);
    } else {
      this.taskService.addTask(task);
    }

    this.router.navigate(['/todo-list']);
  }
}
