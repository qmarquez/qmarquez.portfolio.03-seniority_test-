import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent {

  sidebarStatus: string;
  showDetail: boolean;

  constructor(
    router: ActivatedRoute
  ) {
    // this should be on store
    this.sidebarStatus = 'compacted';
    // May the best way to handle this is make a new module and handle routes there
    router.params.subscribe({
      next: ({ id }) => {
        if (id) {
          this.showDetail = true;
        }
      }
    })
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
