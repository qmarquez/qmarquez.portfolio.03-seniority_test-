import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mails } from '../../models/mail.interface';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent {
  mailType: string;
  page: number;

  mails: Mails;
  loading: boolean;

  constructor(
    route: ActivatedRoute,
    private readonly mailService: MailService
  ) {

    this.loading = false;
    this.mails = [];

    route.params.subscribe({
      next: ({ mailType }) => {
        this.page = 0;
        this.mailType = mailType;
        this.mails.splice(0)
        this.loadNext();
      }
    });
  }

  getMails() {
    console.log(this.page)
    this.mailService.getMails(this.mailType, this.page)
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
    if (this.loading) { return }

    this.loading = true;
    this.getMails();
  }
}
