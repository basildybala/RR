var express = require('express');
var router = express.Router();
var movieHelpers = require('../helpers/movie-helpers');
var getHelp =require('../helpers/gethelp');
const gethelp = require('../helpers/gethelp');

/* GET home page. */
router.get('/', function(req, res, next) {
  getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
    getHelp.getLatestNextweek(req,res).then((nextweekmovies)=>{
     
      res.render('index',{latestupdatemovies,nextweekmovies});
    })
    

  }) 
  
});
router.get('/movie/:id', (req,res)=>{
  getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
    getHelp.getLatestNextweek(req,res).then((nextweekmovies)=>{
      getHelp.getTrendingMovies(req,res).then(async(trendingmovies)=>{
       let movie=await movieHelpers.getOneMovie(req.params.id)
       res.render('movies-category/movie',{movie,latestupdatemovies,nextweekmovies,trendingmovies})
      })
    })
  })
});


router.get('/malayalam-movies', function(req, res, next) {
  getHelp.getMalayalamMovies(req,res).then((malayalamMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
    res.render('movies-category/malayalam-movies',{malayalamMovies,latestupdatemovies});
    })
  }) 
});
//TAMIL
router.get('/tamil-movies', function(req, res, next) {
  getHelp.getTamilMovies(req,res).then((tamilMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
      res.render('movies-category/tamil-movies',{tamilMovies,latestupdatemovies});
    })
  }) 
});
//TELUGU
router.get('/telugu-movies', function(req, res, next) {
  getHelp.getTeluguMovies(req,res).then((teluguMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
      res.render('movies-category/telugu-movies',{teluguMovies,latestupdatemovies});
    })
  }) 
});
//HINDI
router.get('/hindi-movies', function(req, res, next) {
  getHelp.getHindiMovies(req,res).then((hindiMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
     res.render('movies-category/hindi-movies',{hindiMovies,latestupdatemovies});
    })
  }) 
});
//HOLLYWOOD
router.get('/hollywood-movies', function(req, res, next) {
  getHelp.getHollywoodMovies(req,res).then((hollywoodMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
     res.render('movies-category/hollywood-movies',{hollywoodMovies,latestupdatemovies});
    })
  }) 
});
//OTHER
router.get('/other-movies', function(req, res, next) {
  getHelp.getOtherMovies(req,res).then((otherMovies)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
     res.render('movies-category/other-movies',{otherMovies,latestupdatemovies});
    })
  }) 
});
//Web Series
router.get('/web-series', function(req, res, next) {
  getHelp.getWebSeries(req,res).then((webSeries)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
     res.render('movies-category/web-series',{webSeries,latestupdatemovies});
    })
  }) 
});

router.get('/actors', function(req, res, next) {
  movieHelpers.getAllActor(req,res).then((actor)=>{
    getHelp.getLatestUpdate(req,res).then((latestupdatemovies)=>{
     res.render('actor/actors-show',{actor,latestupdatemovies});
    })
  })
});

//ONE ACTOR
router.get('/actor/:id', (req,res)=>{
  getHelp.getLatestUpdate(req,res).then(async (latestupdatemovies)=>{
   let actor=await movieHelpers.getOneActor(req.params.id)
    res.render('actor/actor',{actor,latestupdatemovies})
  })
});

//Terms and Conditions
router.get('/terms-conditions', function(req, res, next) {
    res.render('partials/terms-condtions')
});
//Privacy Policy
router.get('/privacy-policy', function(req, res, next) {
  res.render('partials/privacy-policy')
});
//Contact Us 
router.get('/contact', function(req, res, next) {
  res.render('partials/contact')
});


module.exports = router;
