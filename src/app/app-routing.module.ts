import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./task-table/task-table.module').then((m) => m.TaskTableModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./createdata/createdata.module').then((m) => m.CreatedataModule),
  },
  { path: '', redirectTo: 'create', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
