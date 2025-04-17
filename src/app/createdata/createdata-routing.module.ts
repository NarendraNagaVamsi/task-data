import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedataComponent } from './createdata.component';

const routes: Routes = [
  { path: '', component: CreatedataComponent },
  {
    path: ':id', 
    component: CreatedataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedataRoutingModule {}
