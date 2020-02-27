export interface Mail {
  from: string;
  to: string[];
  cc: string[];
  name: string;
  subject: string;
  body: string;
}

export type Mails = Mail[];
