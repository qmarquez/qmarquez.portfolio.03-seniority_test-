import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpRequest, HttpRequest } from '../lib/httpRequest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpRequest: HttpRequest;

  constructor(
    private readonly httpClient: HttpClient
  ) {
    this.httpRequest = httpRequest(httpClient, environment.auth);
  }

  doLogin(email: string, password: string) {
    return this.httpRequest<{ isLogged: boolean }>('POST', 'signin', { body: { email, password } });
  }
}
