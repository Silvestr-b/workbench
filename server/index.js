const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression')
const expressApp = express();


expressApp.use(compression());
expressApp.use('/dist', express.static(path.join(__dirname, '../dist/client')));


expressApp.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, './page.html'));
});


expressApp.listen(8000, function () {
   console.log('listening on *:8000');
});



