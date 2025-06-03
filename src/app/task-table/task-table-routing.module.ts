import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTableComponent } from './task-table.component';

const routes: Routes = [
  { path: '', component: TaskTableComponent },
  { path: ':id', component: TaskTableComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}

