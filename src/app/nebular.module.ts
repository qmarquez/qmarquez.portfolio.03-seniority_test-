import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

const nebularModules = [
  NbCardModule, 
  NbInputModule,
  NbButtonModule,
]

@NgModule({
  imports: nebularModules,
  exports: nebularModules
})
export class NebularModule { }