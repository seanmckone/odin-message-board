const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Gadget",
    added: new Date().toLocaleDateString("en-US")
  },
  {
    id: 1,
    text: "Hello World!",
    user: "WildFire",
    added: new Date().toLocaleDateString("en-US")
  },
  {
    id: 2,
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend tempor ex dictum adipiscing laoreet, dapibus eget luctus fermentum. Sagittis platea mi augue facilisi accumsan. Donec ligula morbi dictum lobortis hac commodo sapien fringilla quis. Ridiculus convallis magna turpis cubilia semper; nunc sapien hac. In blandit nisi per risus vestibulum justo nunc elementum. Litora interdum lectus suspendisse arcu condimentum enim. Penatibus velit potenti justo; hac erat condimentum sem suscipit. Vivamus quis justo placerat finibus maximus per parturient rhoncus nisl. Pretium ultrices potenti maximus suscipit, parturient at consequat. Placerat litora nulla vestibulum lorem vitae nam mi. Massa bibendum ultricies nascetur magna in adipiscing lobortis. Id aliquam rhoncus platea fusce nisl amet. Sit hac condimentum neque luctus donec ullamcorper ac eu. Elit facilisis neque dis molestie vitae. Conubia parturient dolor nostra gravida, eget etiam feugiat. Fusce lacus facilisi curae dignissim est curae venenatis. Ad ut velit per parturient platea nisi suscipit. Turpis mauris quam aenean; odio elit magna. Cras mauris mattis orci penatibus eu ut. Mus cursus orci ultricies per elementum. Quis massa parturient vehicula montes felis. Elementum lectus fermentum inceptos sit ullamcorper commodo. Est aliquet cubilia sollicitudin eu scelerisque eleifend mattis? Habitant primis felis malesuada tempus aptent et. Semper tempus laoreet sagittis quisque lectus. Sociosqu elit sagittis ad lobortis tellus a; mauris facilisi class. Tempus viverra cubilia curabitur vehicula tristique donec. Nisl risus facilisis erat nulla leo. Curae fusce laoreet aptent rhoncus mattis arcu. Erat ac rhoncus vehicula a dolor ullamcorper venenatis. Porta blandit egestas maximus in quam tempus. Magna erat euismod at parturient lobortis porta. Enim finibus vel finibus mattis fames. Placerat elit natoque egestas congue sagittis lobortis sem. Congue risus facilisis elementum ligula, nostra urna facilisis morbi sodales.",
    user: "Super User",
    added: new Date().toLocaleDateString("en-US")
  }
];

let messageId = messages.length;

// Routing
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
    text: req.body.messageBodyInput, 
    user: req.body.usernameInput, 
    added: new Date().toLocaleDateString("en-US")
  });

  messageId++;

  res.redirect("/");
  
  
});

// Export router
module.exports = indexRouter; 