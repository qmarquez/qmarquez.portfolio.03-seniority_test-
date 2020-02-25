import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MailsComponent } from './pages/mails/mails.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mails', component: MailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
