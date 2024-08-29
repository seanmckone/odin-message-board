const { Router } = require('express');
const indexRouter = Router();


const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Gadget",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "WildFire",
    added: new Date()
  }
];

let messageId = messages.length;


indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

indexRouter.get('/messages/:id', (req, res) => {
  if (messages[req.params.id]) { 
    res.render('message', { message: messages[req.params.id] });
  }
  else {
    res.render('404');
  }
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.get('*', (req, res) => {
  res.render('404');
});

indexRouter.post('/new', (req, res) => {
  messages.push({ 
    id: messageId,
    text: req.body.messageBody, 
    user: req.body.username, 
    added: new Date() });

  res.redirect("/");
  messageId++;
});

module.exports = indexRouter; 