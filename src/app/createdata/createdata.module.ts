import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedataRoutingModule } from './createdata-routing.module';
import { FormsModule } from '@angular/forms';
import { CreatedataComponent } from './createdata.component';

@NgModule({
  declarations: [CreatedataComponent],
  imports: [FormsModule, CommonModule, CreatedataRoutingModule],
  exports: [CreatedataComponent],
})
export class CreatedataModule {}
