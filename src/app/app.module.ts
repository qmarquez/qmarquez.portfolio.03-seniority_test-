import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MailsComponent } from './pages/mails/mails.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, initialState } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NebularModule } from './nebular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IsLoggedInGuard } from './guards/is_logged_in.guard';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailsComponent
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
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NebularModule
  ],
  providers: [
    AuthService,
    IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
