const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3009
const router = express.Router();


app.use('/assets', express.static('assets'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(port);

console.log('Running at Port ', port);
