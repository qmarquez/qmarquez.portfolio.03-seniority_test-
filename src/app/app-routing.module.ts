import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MailsComponent } from './pages/mails/mails.component';
import { IsLoggedInGuard } from './guards/is_logged_in.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':mailType', component: MailsComponent, canActivate: [IsLoggedInGuard] },
  { path: '**', redirectTo: '/mails' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
