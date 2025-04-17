import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskTableComponent } from '../task-table/task-table.component';
import { TaskRoutingModule } from './task-table-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from './task-filter.pipe';

@NgModule({
  declarations: [  TaskTableComponent, TaskFilterPipe],
  imports: [CommonModule, FormsModule, TaskRoutingModule],
  exports:[
   
  ]
})
export class TaskTableModule {}
