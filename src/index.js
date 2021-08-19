const app = require('./app');


// settings
app.set('port', process.env.PORT || 4000);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
  