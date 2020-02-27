import { Component } from '@angular/core';
import { Mails } from '../../models/mail.interface';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent {

  sidebarStatus: string;
  mails: Mails;

  constructor() {
    this.sidebarStatus = 'compacted';
    this.mails = [
      {
        from: 'surgasob@cigage.pt',
        cc: 'wukkobofo@pasu.it',
        body: 'whispered mean directly putting central unless exclaimed personal pocket onto beautiful within slept week widely broken highest teacher escape control blew put whatever phrasewhispered mean directly putting central unless exclaimed personal pocket onto beautiful within slept week widely broken highest teacher escape control blew put whatever phrasewhispered mean directly putting central unless exclaimed personal pocket onto beautiful within slept week widely broken highest teacher escape control blew put whatever phrasewhispered mean directly putting central unless exclaimed personal pocket onto beautiful within slept week widely broken highest teacher escape control blew put whatever phrase',
        name: 'Brent Harper',
        subject: 'letter'
      },
      {
        from: 'icezog@uw.tv',
        cc: 'mileso@devoveco.bg',
        body: 'fun animal small explain news opportunity chief simply library frequently day chemical airplane whenever shells reason glad basic salmon lying principle bark characteristic happened',
        name: 'Jimmy Miles',
        subject: 'feature'
      },
      {
        from: 'eppelhu@ewihubani.cm',
        cc: 'san@vam.gh',
        body: 'shoot copy bridge all fresh organization thousand western prize dawn hunt shelf learn lose drive taught given loss rocky bend field equally add classroom',
        name: 'Lelia Harrington',
        subject: 'dark'
      },
      {
        from: 'fu@pevanat.cd',
        cc: 'tulimha@fipel.ae',
        body: 'correct press up plenty decide view represent game planning manner old current repeat such tight respect continued particular fallen climb next simplest take tree',
        name: 'Eric Harris',
        subject: 'throughout'
      },
      {
        from: 'eku@bisiasu.ma',
        cc: 'li@suldimtu.qa',
        body: 'find shoulder no butter compass vapor soon buffalo news state famous ask promised along principle hollow straw swing morning bear period over slept regular',
        name: 'Genevieve Blair',
        subject: 'nose'
      },
      {
        from: 'peehe@wiz.dj',
        cc: 'cebgi@vi.mw',
        body: 'tried temperature lying route nearer toy happy society discussion express war explain vast view negative blood mirror any noted force flower goes result bent',
        name: 'Sylvia Myers',
        subject: 'vowel'
      },
      {
        from: 'gop@coz.md',
        cc: 'vuuri@soluumi.cw',
        body: 'hearing visitor question divide trail began passage fireplace back solar needed meant standard pony dog fact noted market essential shade express mark usual every',
        name: 'Dean Bass',
        subject: 'national'
      },
      {
        from: 'mihivewef@tuwaj.ug',
        cc: 'zan@pi.in',
        body: 'thirty fill been finish daughter breath believed human it frighten greatest strike want advice dirty face rhythm same during whose group symbol negative around',
        name: 'Jeanette Russell',
        subject: 'memory'
      },
      {
        from: 'iw@ucja.eu',
        cc: 'wohaaso@hokucgih.tm',
        body: 'satisfied traffic slabs fell felt poetry ill clothing occur rich aboard smaller teach hang bridge double symbol rest climate grain package manufacturing verb unhappy',
        name: 'Howard Smith',
        subject: 'page'
      },
      {
        from: 'ajeubu@busmeg.ki',
        cc: 'mabi@hisco.ge',
        body: 'imagine fort view melted that construction examine source silent use beneath mysterious discover orange frog tune bear took right material bar secret coming nose',
        name: 'Vernon Carlson',
        subject: 'consist'
      },
      {
        from: 'vo@dinut.io',
        cc: 'or@fer.sn',
        body: 'fox perhaps spin diagram chart escape selection castle understanding citizen fly buy trace hospital expression may wash under spite depth begun lose face gave',
        name: 'Margaret Hoffman',
        subject: 'clearly'
      },
      {
        from: 'zakub@det.im',
        cc: 'ap@wufidted.na',
        body: 'wear somewhere possible hold alike damage hungry gradually wrote train silent largest fence become successful variety magic leg break managed table frozen soldier between',
        name: 'Brian Atkins',
        subject: 'negative'
      },
      {
        from: 'iri@arbela.iq',
        cc: 'le@pugahga.io',
        body: 'cutting managed fish six low rocket sunlight courage dozen generally across reason food stage center rising ring whether shut physical dry me negative mountain',
        name: 'Anthony Pierce',
        subject: 'environment'
      },
      {
        from: 'mig@za.jo',
        cc: 'vubsuw@gaaftaz.fo',
        body: 'lying image us hope region where exchange movement possible sometime larger white cave unusual chemical creature spread selection driving drive mainly bring coal fighting',
        name: 'Mittie Martin',
        subject: 'which'
      },
      {
        from: 'pawtavut@umwel.gm',
        cc: 'lolazi@tawulzu.ma',
        body: 'themselves news thirty nation motor our afternoon period line country pleasure arrive third crop party breathe dangerous felt chicken roof cattle treated advice shape',
        name: 'Elnora Jackson',
        subject: 'about'
      },
      {
        from: 'bejej@apfobhin.pf',
        cc: 'rivina@ut.uz',
        body: 'lips inside greatly difficulty whenever chain leave compound fuel plan syllable music become children worry fear word careful swam numeral lack wrote thy explanation',
        name: 'Christian Mann',
        subject: 'smaller'
      },
    ]
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
