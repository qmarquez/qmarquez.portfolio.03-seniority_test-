import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MailsComponent } from './pages/mails/mails.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, initialState } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbCardModule, NbInputModule, NbButtonModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbListModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IsLoggedInGuard } from './guards/is_logged_in.guard';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MailListItemComponent } from './components/mail-list-item/mail-list-item.component';
import { MailService } from './services/mail.service';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';
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
];

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
    FormsModule,
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
    ...nebularModules
  ],
  providers: [
    AuthService,
    IsLoggedInGuard,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
