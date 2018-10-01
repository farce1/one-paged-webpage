let express = require('express');
let router = express.Router();


router
  .route('/json')
  .get(function(req, res) {
    console.log('Getting json');
    res.json({
      'jsonData': true
    });
  })
  .post(function(req, res) {
    console.log('Posting json');
    res.json({
      'jsonData': 'Post received'
    });
  });

module.exports = router;
