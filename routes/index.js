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
//Movie Language LIst
//MALAYALAM
router.get('/malayalam-movies', function(req, res, next) {
  getHelp.getMalayalamMovies(req,res).then((malayalamMovies)=>{
    
    res.render('movies-category/malayalam-movies',{malayalamMovies});

  }) 
});
//TAMIL
router.get('/tamil-movies', function(req, res, next) {
  getHelp.getTamilMovies(req,res).then((tamilMovies)=>{
    res.render('movies-category/tamil-movies',{tamilMovies});

  }) 
});
//TELUGU
router.get('/telugu-movies', function(req, res, next) {
  getHelp.getTeluguMovies(req,res).then((teluguMovies)=>{
    res.render('movies-category/telugu-movies',{teluguMovies});

  }) 
});
//HINDI
router.get('/hindi-movies', function(req, res, next) {
  getHelp.getHindiMovies(req,res).then((hindiMovies)=>{
    res.render('movies-category/hindi-movies',{hindiMovies});

  }) 
});
//HOLLYWOOD
router.get('/hollywood-movies', function(req, res, next) {
  getHelp.getHollywoodMovies(req,res).then((hollywoodMovies)=>{
    res.render('movies-category/hollywood-movies',{hollywoodMovies});

  }) 
});
//OTHER
router.get('/other-movies', function(req, res, next) {
  getHelp.getOtherMovies(req,res).then((otherMovies)=>{
    res.render('movies-category/other-movies',{otherMovies});

  }) 
});


router.get('/actors', function(req, res, next) {
  movieHelpers.getAllActor(req,res).then((actor)=>{
    res.render('actor/actors-show',{actor});
  })
});
//ONE Movie Show
// router.get('/movie/:id',async (req,res)=>{
//   let movie=await movieHelpers.getOneMovie(req.params.id)
//   res.render('movies-category/movie',{movie})
// });
//ONE ACTOR
router.get('/actor/:id',async (req,res)=>{
  let actor=await movieHelpers.getOneActor(req.params.id)
  res.render('actor/actor',{actor})
});



//pagination
function paginatedResults(model){
  return async (req,res,next)=>{
      const page=parseInt(req.query.page)
  const limit=parseInt(req.query.limit)

  
  const startIndex=(page - 1)* limit
  const endIndex=page*limit
  const results={}
  if(endIndex< await model.countDocument().exec()){
      results.next={
          page:page+1,
          limit:limit
      }
  }

  if(startIndex>0){
  results.previous={
      page:page-1,
      limit:limit
  }
}
try{
  results.results= await model.find().limit(limit).skip(startIndex).exec()
  res.paginatedResults =results
  next()
} catch(e) {
  res.status(500).json({message:e.message})
}
  }
}



module.exports = router;
