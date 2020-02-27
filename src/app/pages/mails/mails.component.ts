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

  sidebarStatus: string;
  mails: Mails;

  constructor(
    route: ActivatedRoute,
    private readonly mailService: MailService
  ) {
    // this should be on store
    this.sidebarStatus = 'compacted';
    route.params.subscribe({
      next: ({ mailType }) => this.getMails(mailType)
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

  getMails(type) {
    this.mailService.getMails(type);
  }

  loadNext() {
    console.log('asdsa')
  }

}
