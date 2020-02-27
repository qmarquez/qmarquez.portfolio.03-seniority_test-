import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebularModules = [
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbEvaIconsModule,
  NbIconModule,
  NbListModule
]

@NgModule({
  imports: nebularModules,
  exports: nebularModules
})
export class NebularModule { }