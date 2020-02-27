import { Injectable } from '@angular/core';
import { HttpRequest, httpRequest } from '../lib/httpRequest';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mails } from '../models/mail.interface';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  httpRequest: HttpRequest

  constructor(
    httpClient: HttpClient
  ) {
    this.httpRequest = httpRequest(httpClient, '');
  }

  getMails(type) {
    return this.httpRequest<Mails>('GET', type);
  }

}
