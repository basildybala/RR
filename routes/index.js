var express = require('express');
var router = express.Router();
var movieHelpers = require('../helpers/movie-helpers');
var getHelp =require('../helpers/gethelp');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Movie Language LIst
// router.get('/malayalam-movies', function(req, res, next) {
//   movieHelpers.getAllMovies().then((movies)=>{
//     res.render('movies-category/malayalam-movies',{movies});
//   })
  

// });
router.get('/malayalam-movies', function(req, res, next) {
  getHelp.getMalayalamMovies().then((malayalamMovies)=>{
    res.render('movies-category/malayalam-movies',{malayalamMovies});
    console.log(malayalamMovies);
  })
  

});
router.get('/actors', function(req, res, next) {
  movieHelpers.getAllActor().then((actor)=>{
    res.render('actor/actors-show',{actor});
  })
});
//ONE Movie Show
router.get('/movie/:id',async (req,res)=>{
  console.log(req.params.id);
  let movie=await movieHelpers.getOneMovie(req.params.id)
  let actors=await movieHelpers.getActors()
  res.render('movies-category/movie',{movie})
});
//ONE ACTOR
router.get('/actor/:id',async (req,res)=>{
  
  let actor=await movieHelpers.getOneActor(req.params.id)
  
  res.render('actor/actor',{actor})
});


router.get('/movies-add-actor/:id',)


module.exports = router;
