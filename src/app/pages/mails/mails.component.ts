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

  constructor() {
    // this should be on store
    this.sidebarStatus = 'compacted';
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

}
