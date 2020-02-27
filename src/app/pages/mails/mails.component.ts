import { Component } from '@angular/core';
import { Mails } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent {

  mailType: string;
  page: number;
  sidebarStatus: string;
  mails: Mails;
  loading: boolean;

  constructor(
    route: ActivatedRoute,
    private readonly mailService: MailService
  ) {
    // this should be on store
    this.sidebarStatus = 'compacted';

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

  toggleMenu() {
    switch (this.sidebarStatus) {
      case 'compacted':
        this.sidebarStatus = 'expanded';
        return;
      case 'expanded':
        this.sidebarStatus = 'compacted';
        return;
    }
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
