import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MailsComponent } from './pages/mails/mails.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, initialState } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbSidebarModule } from '@nebular/theme';
import { NebularModule } from './modules/nebular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IsLoggedInGuard } from './guards/is_logged_in.guard';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MailListItemComponent } from './components/mail-list-item/mail-list-item.component';
import { MailService } from './services/mail.service';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailsComponent,
    MailListItemComponent,
    MailListComponent,
    MailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NebularModule
  ],
  providers: [
    AuthService,
    IsLoggedInGuard,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
