const express = require('express');
const path = require('path')

const app = express();
const router = express.Router();
const publicPath = path.join(__dirname, "..", "public");

router.post('/auth', (req, res) => {
  const { email, password } = req.body;

  const emailValidate = email === 'user@vi-datec.com';

  if (!emailValidate) {
    return res.sendStatus(401);
  }

  const passwordValidate = password === 'test';

  if (!passwordValidate) {
    return res.sendStatus(401);
  }

  return res.sendStatus(200);
});

app.use(express.json());

app.use('/api', router);

app.use(express.static(publicPath));

app.listen(3000, () => console.log('server ready'));
