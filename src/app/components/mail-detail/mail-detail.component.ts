import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnDestroy {
  allowEdit: boolean;
  mailForm: FormGroup;
  timerId: number;
  readonly intervalToSaveDrafts = 10000;

  constructor(
    route: ActivatedRoute,
    fBuilder: FormBuilder,
    private readonly mailService: MailService,
    private readonly router: Router
  ) {
    this.mailForm = fBuilder.group({
      id: '',
      to: '',
      subject: '',
      body: ''
    });
    route.params.subscribe(this.onParamsChange);
  }

  onParamsChange = ({ id, mailType }) => {
    this.allowEdit = (id === 'new' || mailType === 'draft');

    if (id !== 'new') {
      this.mailService.getMail(mailType, id)
        .subscribe({
          next: ({ to, subject, body }) => {
            this.mailForm.setValue({ id, to, subject, body });
          }
        });
    }

    if (this.allowEdit && !this.timerId) {
      this.setInterval();
    }
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timerId);
  }

  setInterval() {
    this.timerId = window.setTimeout(() => {
      this.saveDraft();
      this.setInterval();
    }, this.intervalToSaveDrafts);
  }

  saveDraft() {
    const mail: Mail = { ...this.mailForm.value };
    this.mailService.saveMail('draft', mail)
      .subscribe({
        next: ({ id }) => {
          const prevId = this.mailForm.value.id;

          if (!prevId) {
            this.mailForm.controls.id.setValue(id);
            this.router.navigateByUrl(`/draft/${id}`);
          }
        },
        error: console.error
      });
  }

  mailFormSubmit() {
    const mail: Mail = this.mailForm.value;
    this.mailService.saveMail('sent', mail)
      .subscribe({
        complete: () => this.router.navigateByUrl('/mails'),
        error: console.error,
      });
  }

}
