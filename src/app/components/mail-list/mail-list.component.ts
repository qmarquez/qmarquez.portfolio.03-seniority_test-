import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mails } from '../../models/mail.interface';
import { MailService } from '../../services/mail.service';
import * as pluralize from 'pluralize';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent {
  mailType: string;
  page: number;
  query: string;
  delaySearch: { timeoutId: number, delayToFind: number };

  mails: Mails;
  loading: boolean;

  get singularType() {
    return pluralize.singular(this.mailType);
  }

  constructor(
    route: ActivatedRoute,
    private readonly mailService: MailService
  ) {
    this.loading = false;
    this.mails = [];
    this.query = undefined;
    this.delaySearch = { timeoutId: undefined, delayToFind: 300 };

    route.params.subscribe({
      next: ({ mailType }) => {
        this.page = 0;
        this.mailType = mailType;
        this.mails.splice(0);
        this.loadNext();
      }
    });
  }

  getMails() {
    this.mailService.getMails(this.mailType, this.page, this.query)
      .subscribe({
        next: mails => {
          this.page++;
          this.mails.push(...mails);
          this.loading = false;
        },
        error: error => {
          console.error('error: ', error);
          this.loading = false;
        }
      });
  }

  loadNext() {
    if (this.loading) { return; }

    this.loading = true;
    this.getMails();
  }

  findQuery(value: string) {
    if (this.delaySearch.timeoutId) {
      window.clearTimeout(this.delaySearch.timeoutId);
    }
    this.delaySearch.timeoutId = window.setTimeout(() => {
      this.page = 0;
      this.mails.splice(0);
      this.query = value;
      this.getMails();
    }, this.delaySearch.delayToFind);
  }
}
