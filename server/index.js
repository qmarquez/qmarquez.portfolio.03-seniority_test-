const express = require('express');
const path = require('path')

const app = express();
const router = express.Router();
const publicPath = path.join(__dirname, "..", "public");

const mails_mocks = require('./mails.mock.json');
const sentsMails = [];
const draftsMails = [];

app.use(express.json());
app.use(express.static(publicPath));

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
  const { page = 0, pagination = 20 } = req.query;
  const { type } = req.params;
  const startIndex = page * pagination;

  const repository = {
    mails: mails_mocks,
    drafts: draftsMails,
    sents: sentsMails
  }[type];

  if (!repository) { return res.sendStatus(404) };

  const mails = repository.slice(startIndex, startIndex + pagination);

  return res.status(200).send(mails);
});

router.get('/:type/:id', (req, res) => {
  const { type, id } = req.params;

  const repository = {
    mail: mails_mocks,
    draft: draftsMails,
    sent: sentsMails
  }[type];

  if (!repository) { return res.sendStatus(404) };

  const mail = repository.find(({ id: savedId }) => savedId === id);

  res.send(mail);
});

router.post('/:type', (req, res) => {
  const mail = req.body;
  const { type } = req.params;

  const repository = {
    sent: sentsMails,
    draft: draftsMails
  }[type];

  if (!repository) { return res.sendStatus(404) };

  mail.id = repository.length;
  repository.push(mail);

  return res.sendStatus(200);
});

app.use('/api', router);


app.listen(3000, () => console.log('server ready'));
