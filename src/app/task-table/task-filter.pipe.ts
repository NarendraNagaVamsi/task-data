import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[],taskId: string,description: string,status: string): Task[] {
    return tasks.filter(
      (task) =>
        (!taskId || task.taskid.toLowerCase().includes(taskId.toLowerCase())) &&
        (!description ||
          task.description.toLowerCase().includes(description.toLowerCase())) &&
        (!status || task.status.toLowerCase().includes(status.toLowerCase()))
    );
  }
}
