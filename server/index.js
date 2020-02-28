const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();
const router = express.Router();
const publicPath = path.join(__dirname, "..", "public");

const mails_mocks = require('./mails.mock.json');
const sentMails = [];
const draftMails = [];

app.use(express.json());
app.use(cors());

router.options('/api/*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

router.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  const emailValidate = email === 'user@vi-datec.com';

  if (!emailValidate) {
    return res.sendStatus(401);
  }

  const passwordValidate = password === 'test';

  if (!passwordValidate) {
    return res.sendStatus(401);
  }

  return res.status(200).send({ isLogged: true });
});

router.get('/:type', (req, res) => {
  const { page = 0, pagination = 20, q = '' } = req.query;
  const { type } = req.params;
  const startIndex = page * pagination;

  const queryRx = new RegExp(q, 'ig');
  const repository = {
    mails: mails_mocks,
    drafts: draftMails,
    sents: sentMails
  }[type];

  if (!repository) { return res.sendStatus(404) };

  // May i should control if q not come not filter.
  const mails = repository
    .filter(({ from, to, cc, name }) => {
      let match = false;
      for (const mail of [from, to, cc, name]) {
        match = queryRx.exec(mail);
        if (match) { break; }
      }
      return match;
    })
    .slice(startIndex, startIndex + pagination);

  return res.status(200).send(mails);
});

router.get('/:type/:id', (req, res) => {
  const { type, id } = req.params;

  const repository = {
    mail: mails_mocks,
    draft: draftMails,
    sent: sentMails
  }[type];

  if (!repository) { return res.sendStatus(404) };

  const mail = repository.find(({ id: savedId }) => savedId === id);

  res.send(mail);
});

router.post('/draft', (req, res) => {
  const mail = req.body;

  if (mail.id) {
    const savedMail = draftMails.find(({ id }) => id === mail.id);

    if (!savedMail) { return res.sendStatus(404); }

    savedMail.to = mail.to;
    savedMail.subject = mail.subject;
    savedMail.body = mail.body
  } else {
    mail.id = `${draftMails.length}`;
    draftMails.push(mail);
  }

  return res.status(201).send({ id: mail.id });
});

router.post('/sent', (req, res) => {
  const mail = req.body;

  const draftMail = draftMails.findIndex(({ id }) => id === mail.id);

  if (draftMail === -1) {
    return res.sendStatus(400);
  }

  draftMails.splice(draftMail, 1);

  mail.id = `${sentMails.length}`;
  sentMails.push(mail);

  return res.status(201).send({ id: mail.id });
});

app.use('/api', router);
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, () => console.log('server ready'));
