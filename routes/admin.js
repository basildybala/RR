var express = require('express');
var router = express.Router();
var movieHelpers = require('../helpers/movie-helpers');
var loginHelpers= require('../helpers/login');

const verifyAdmin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/malayalam-movies')
  }
}
//BASIC PAGE ADMIN
router.get('/', function(req, res, next) {
  // let admin=req.session.admin
  res.render('admin/basic-section');
});


//ACTOR SECTION
router.get('/show-actor', function(req, res, next) {
  movieHelpers.getAllActor().then((actor)=>{
    res.render('admin/show-actor',{actor});
  })
  
});
//ACTOR ADD
// router.get('/add-actor',verifyAdmin, function(req, res, next) {
router.get('/add-actor', function(req, res, next) {
  res.render('admin/add-actor');
});
// router.post('/add-actor',(req,res)=>{
//   movieHelpers.addActor(req.body,(id)=>{
//     let actorposter=req.files.image
   
//     actorposter.mv("./public/images/actor-posters/" + id + ".jpg",(err,done)=>{
//       if(!err){
//         res.render("admin/add-actor")
//       }else{
//         console.log(err);
//       }
//     })
  
//   })
// })
router.post('/add-actor',(req,res)=>{
  movieHelpers.addActor(req.body,(id)=>{
    let actorposter=req.files.image
    let actorposter1=req.files.image1
    actorposter.mv("./public/images/actor-posters/" + id + ".jpg",(err,done)=>{
      actorposter1.mv("./public/images/actor-posters/" + id + "a"+".jpg",(err,done)=>{
        if(!err){
          res.render("admin/add-actor")
        }else{
          console.log(err);
        }
      })
      
    })
  
  })
})
//EDIT ACTOR
router.get('/edit-actor/:id',async (req,res)=>{
  
  let actor=await movieHelpers.getOneActor(req.params.id)
  
  res.render('admin/edit-actor',{actor})
});

router.post('/edit-actor/:id',(req,res)=>{
  
  let id=req.params.id
  movieHelpers.updateActor(req.params.id,req.body).then(()=>{
    res.redirect('/admin/show-actor')
    if(req.files.image){
      let actorposter=req.files.image
      actorposter.mv("./public/images/actor-posters/" + id + ".jpg",)
    }
  })
})
//DELETE ACTOR
router.get('/delete-actor/:id',(req,res)=>{
  let actorId=req.params.id
  movieHelpers.deleteActor(actorId).then((response)=>{
    res.redirect('/admin/show-actor')
  })
});


//MOVIES SECTION--------------------------------------------------------

router.get('/show-admin-movies', function(req, res, next) {
  console.log(req.params.id);
  movieHelpers.getAllMovies().then((movies)=>{
    res.render('admin/show-movies',{movies});
  })
  

});
//ADD MOVIE
router.get('/add-movies', function(req, res, next) {
  
  res.render('admin/add-movies');
});
router.post('/add-movies',(req,res)=>{
  movieHelpers.addMovies(req.body,(id)=>{
    let movieposter=req.files.image
    let moviecoverposter=req.files.image1
    movieposter.mv("./public/images/movie-posters/" + id + ".jpg",(err,done)=>{
      moviecoverposter.mv("./public/images/movie-posters/" + id +"a"+".jpg",(err,done)=>{
        if(!err){
          res.render("admin/add-movies")
        }else{
          console.log(err);
        }
      })
      
    })
    
  })
});

//EDIT MOVIE
router.get('/edit-movies/:id',async (req,res)=>{
  console.log(req.params.id);
  let movie=await movieHelpers.getOneMovie(req.params.id)
  res.render('admin/edit-movies',{movie})
});

router.post('/edit-movies/:id',(req,res)=>{
  console.log(req.param.id);
  let id=req.params.id
  movieHelpers.updateMovie(req.params.id,req.body).then(()=>{
    res.redirect('/admin/show-admin-movies')
    if(req.files.image){
      let movieposter=req.files.image
      movieposter.mv("./public/images/movie-posters/" + id + ".jpg",)
    }
    else if
    (req.files.image1){
      let movieposter=req.files.image1
      movieposter.mv("./public/images/movie-posters/" + id +"a"+".jpg",)
    }
  })
})


//DELETE MOviE
router.get('/delete-movies/:id',(req,res)=>{
  let moviesId=req.params.id
  movieHelpers.deleteMovies(moviesId).then((response)=>{
    res.redirect('/admin/show-admin-movies')
  })
});

//ADD IMAGES
router.get('/add-images',(req, res) => {
  
  res.render('admin/images-section/add-images');
});

router.post('/add-images',(req,res)=>{
  
    let movieposter=req.files.image
    movieposter.mv("./public/images/filmimages/.jpg",(err,done)=>{
      if(!err){
        res.render("admin/image-section/add-images")
      }else{
        console.log(err);
      }
    
    
  })
});
//NEXT WEEK MOVIES------------------------------------------
//SHOW
router.get('/show-nextweek-movies', function(req, res, next) {
  movieHelpers.getAllNextweek().then((nextweek)=>{
    res.render('admin/next-week/show-nextweek',{nextweek});
  })
  

});
//ADD
router.get('/add-nextweek-movies', function(req, res, next) {
  
  res.render('admin/next-week/add-nextweek');
});
router.post('/add-nextweek-movies',(req,res)=>{
  movieHelpers.addNextweek(req.body,(result)=>{
    res.render("admin/next-week/add-nextweek")   
    
  })
});
//EDIT
router.get('/edit-nextweek/:id',async (req,res)=>{
  let nextweek=await movieHelpers.getOneNextweek(req.params.id)
  res.render('admin/next-week/edit-nextweek',{nextweek})
});

router.post('/edit-nextweek/:id',(req,res)=>{
  movieHelpers.updateNextweek(req.params.id,req.body).then(()=>{
    res.redirect('/admin/show-nextweek-movies')
  })
})
//DELETE
router.get('/delete-nextweek/:id',(req,res)=>{
  let nextweekId=req.params.id
  movieHelpers.deleteNextweek(nextweekId).then((response)=>{
    res.redirect('/admin/show-nextweek-movies')
  })
});


//LOGIN-------------------------------------------------------
router.get('/97login', function(req, res, next) {
  if(req.session.loggedIn){
    res.redirect('basic')
  }else
  res.render('admin/login');
});
router.post('/97login',(req,res)=>{
loginHelpers.doLogin(req.body).then((response)=>{
  if(response.status){
    req.session.loggedIn=true
    req.session.admin=response.admin
    res.redirect('basic')
  }else{
    res.redirect('/')
  }
})
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})
//SIGNUP
router.get('/97signup', function(req, res, next) {
  res.render('admin/signup');
});
router.post('/97signup',(req,res)=>{
  
  loginHelpers.doSignup(req.body).then((response)=>{
    
  })
})




module.exports = router;
