import { Injectable } from '@angular/core';
import { HttpRequest, httpRequest } from '../lib/httpRequest';
import { HttpClient } from '@angular/common/http';
import { Mails, Mail } from '../models/mail.interface';

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

  getMails(type: string, page: number, query?: string) {
    const params: any = {
      page: page.toString()
    };
    if (query) {
      params.q = query;
    }
    return this.httpRequest<Mails>('GET', type, { params });
  }

  getMail(type: string, id: string) {
    return this.httpRequest<Mail>('GET', [type, id]);
  }

  saveMail(type: string, mail: Mail) {
    return this.httpRequest('POST', type, { body: mail });
  }

}
