const express = require('express');
const path = require('path')

const app = express();
const router = express.Router();
const publicPath = path.join(__dirname, "..", "public");

const mails_mocks = require('./mails.mock.json');

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
  const startIndex = page * pagination;

  const mails = mails_mocks.slice(startIndex, startIndex + pagination);

  return res.status(200).send(mails);
});


app.use('/api', router);


app.listen(3000, () => console.log('server ready'));
