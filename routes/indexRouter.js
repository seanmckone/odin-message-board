const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Gadget",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Wildfyre",
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', (req, res) => {
  messages.unshift({ 
    text: req.body.messageBody, 
    user: req.body.username, 
    added: new Date() });

  res.redirect("/")
});

module.exports = indexRouter; 