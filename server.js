const express = require('express');
const multer = require('multer');
const app = express();

app.set('port', process.env.PORT || 3500);

var router = new express.Router();
// todo
app.use('/', router);

// routes ---------------------------
router.get('/', function(req, res) {
  res.json(json);
});


// ----------------------------------

var server = app.listen(app.get('port'), function() {
  console.log('Server up http://localhost:' + app.get('port'));
});