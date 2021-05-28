var express = require('express');
var router = express.Router();
var movieHelpers = require('../helpers/movie-helpers');
var getHelp =require('../helpers/gethelp');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Movie Language LIst
//MALAYALAM
router.get('/malayalam-movies', function(req, res, next) {
  getHelp.getMalayalamMovies().then((malayalamMovies)=>{
    res.render('movies-category/malayalam-movies',{malayalamMovies});

  }) 
});
//TAMIL
router.get('/tamil-movies', function(req, res, next) {
  getHelp.getTamilMovies().then((tamilMovies)=>{
    res.render('movies-category/tamil-movies',{tamilMovies});

  }) 
});
//TELUGU
router.get('/telugu-movies', function(req, res, next) {
  getHelp.getTeluguMovies().then((teluguMovies)=>{
    res.render('movies-category/telugu-movies',{teluguMovies});

  }) 
});
//HINDI
router.get('/hindi-movies', function(req, res, next) {
  getHelp.getHindiMovies().then((hindiMovies)=>{
    res.render('movies-category/hindi-movies',{hindiMovies});

  }) 
});


router.get('/actors', function(req, res, next) {
  movieHelpers.getAllActor().then((actor)=>{
    res.render('actor/actors-show',{actor});
  })
});
//ONE Movie Show
router.get('/movie/:id',async (req,res)=>{
  let movie=await movieHelpers.getOneMovie(req.params.id)
  res.render('movies-category/movie',{movie})
});
//ONE ACTOR
router.get('/actor/:id',async (req,res)=>{
  let actor=await movieHelpers.getOneActor(req.params.id)
  res.render('actor/actor',{actor})
});


router.get('/movies-add-actor/:id',)


module.exports = router;
