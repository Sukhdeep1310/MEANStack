var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie Store' });
});

const ctrlAbout = require('../controller/about');
const ctrlList = require('../controller/list');

router.get('/list', ctrlList.homelist);


router.get('/movies/:movieid', ctrlList.movieInfo);
router.route('/new')
    .get(ctrlList.addNewMovie)
    .post(ctrlList.doAddNewMovie);

router.get('/about', ctrlAbout.about);


module.exports = router;
