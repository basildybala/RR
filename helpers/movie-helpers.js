
var db=require('../dbconnection/connection')
var collection=require('../dbconnection/collections')
var {ObjectID}=require('mongodb');
const { response } = require('express');




module.exports={

    addMovies:(movies,callback)=>{
        console.log(movies);
        db.get().collection('movies').insertOne(movies).then((data)=>{
            callback(data.ops[0]._id)
        })
    
    },
    getAllMovies:()=>{
        return new Promise(async(resolve,reject)=>{
            let movies=await db.get().collection(collection.MOVIES_COLLECTION).find().toArray()
            resolve(movies)
        })
    },
    getOneMovie: (movieId) => {
       
        return new Promise( async (resolve,reject) => {
          let movies = await db.get()
            .collection(collection.MOVIES_COLLECTION)
            .findOne({ _id:ObjectID(movieId)})
           resolve(movies)
        });
      },
    updateMovie:(movieId,movieDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.MOVIES_COLLECTION).updateOne({_id:ObjectID(movieId)},{
                $set:{
                    name:movieDetails.name,
                    engname:movieDetails.engname,
                    category:movieDetails.category,
                    trending:movieDetails.trending,
                    releasedate:movieDetails.releasedate,
                    readmorestory:movieDetails.readmorestory,
                    director:movieDetails.director,
                    producedby:movieDetails.producedby,
                    genre:movieDetails.genre,
                    duration:movieDetails.duration,
                    story:movieDetails.story,
                    storyenglish:movieDetails.storyenglish,
                    yttrailorlink:movieDetails.yttrailorlink,
                    ytlink:movieDetails.ytlink,
                    ytlink1:movieDetails.ytlink1,
                    ytlink2:movieDetails.ytlink2,
                    ytlink3:movieDetails.ytlink3,
                    actid1:movieDetails.actid1,
                    actid2:movieDetails.actid2,
                    actid3:movieDetails.actid3,
                    actid4:movieDetails.actid4,
                    actid5:movieDetails.actid5,
                    actid6:movieDetails.actid6,
                    actorname1:movieDetails.actorname1,
                    actorname2:movieDetails.actorname2,
                    actorname3:movieDetails.actorname3,
                    actorname4:movieDetails.actorname4,
                    actorname5:movieDetails.actorname5,
                    actorname6:movieDetails.actorname6,
                    mvactorname1:movieDetails.mvactorname1,
                    mvactorname2:movieDetails.mvactorname2,
                    mvactorname3:movieDetails.mvactorname3,
                    mvactorname4:movieDetails.mvactorname4,
                    mvactorname5:movieDetails.mvactorname5,
                    mvactorname6:movieDetails.mvactorname6,

                   
                    
                }
            }).then((response)=>{
                resolve()
            })
        })
    },

    deleteMovies:(moviesId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.MOVIES_COLLECTION).removeOne({_id:ObjectID(moviesId)}).then((response)=>{
                resolve(response)
            })
        })
    },
    addActor:(actor,callback)=>{
        
        db.get().collection('actor').insertOne(actor).then((data)=>{
            callback(data.ops[0]._id)
        })
    
    },
    getAllActor:()=>{
        return new Promise(async(resolve,reject)=>{
            let actor=await db.get().collection(collection.ACTOR_COLLECTION).find().toArray()
            resolve(actor)
        })
    },
    getOneActor:(actorId) => {
       
        return new Promise((resolve,reject) => {

          db.get()
            .collection(collection.ACTOR_COLLECTION)
            .findOne({ _id:ObjectID(actorId)})
            .then((actor) => {
                // console.log(movie);
              resolve(actor);
            });
        });
      },
      updateActor:(actorId,actorDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ACTOR_COLLECTION).updateOne({_id:ObjectID(actorId)},{
                $set:{
                    actorname:actorDetails.actorname,
                    language:actorDetails.language,
                    age:actorDetails.age,
                    yearactive:actorDetails.yearactive,
                    occupation:actorDetails.occupation,
                    instalink:actorDetails.instalink,
                    twitlink:actorDetails.twitlink,
                    biography:actorDetails.biography,
                    filmid1:actorDetails.filmid1,
                    filmid2:actorDetails.filmid2,
                    filmid3:actorDetails.filmid3,
                    filmid4:actorDetails.filmid4,
                    filmid5:actorDetails.filmid5,
                    filmid6:actorDetails.filmid6,
                    filmid7:actorDetails.filmid7,
                    filmid8:actorDetails.filmid8,
                    filmid9:actorDetails.filmid9,
                    filmid10:actorDetails.filmid10,
                    filmid11:actorDetails.filmid11,
                    filmid12:actorDetails.filmid12,
                    filmid13:actorDetails.filmid13,
                    filmid14:actorDetails.filmid14,
                    filmid15:actorDetails.filmid15,
                    filmname1:actorDetails.filmname1,
                    filmname2:actorDetails.filmname2,
                    filmname3:actorDetails.filmname3,
                    filmname4:actorDetails.filmname4,
                    filmname5:actorDetails.filmname5,
                    filmname6:actorDetails.filmname6,
                    filmname7:actorDetails.filmname7,
                    filmname8:actorDetails.filmname8,
                    filmname9:actorDetails.filmname9,
                    filmname10:actorDetails.filmname10,
                    filmname11:actorDetails.filmname11,
                    filmname12:actorDetails.filmname12,
                    filmname13:actorDetails.filmname13,
                    filmname14:actorDetails.filmname14,
                    filmname15:actorDetails.filmname15,


                    

                }
            }).then((response)=>{
                resolve()
            })
        })
    },
    deleteActor:(actorId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ACTOR_COLLECTION).removeOne({_id:ObjectID(actorId)}).then((response)=>{
                resolve(response)
            })
        })
    },
    addNextweek:(nextweek,callback)=>{
        
        db.get().collection('nextweek').insertOne(nextweek).then((data)=>{
            callback(true)
        })
    
    },
    getAllNextweek:()=>{
        return new Promise(async(resolve,reject)=>{
            let nextweek=await db.get().collection(collection.NEXT_WEEK_COLLECTION).find().sort({_id:-1}).toArray()
            resolve(nextweek)
        })
    },
    getOneNextweek:(nextweekId) => {
       
        return new Promise((resolve,reject) => {

          db.get()
            .collection(collection.NEXT_WEEK_COLLECTION)
            .findOne({ _id:ObjectID(nextweekId)})
            .then((nextweek) => {
              resolve(nextweek);
            });
        });
      },
      updateNextweek:(nextweekId,nextweekDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.NEXT_WEEK_COLLECTION).updateOne({_id:ObjectID(nextweekId)},{
                $set:{
                    moviename:nextweekDetails.moviename,
                    moviereleasedate:nextweekDetails.moviereleasedate,
                    movieid:nextweekDetails.movieid,

                }
            }).then((response)=>{
                resolve()
            })
        })
    },
    deleteNextweek:(nextweekId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.NEXT_WEEK_COLLECTION).removeOne({_id:ObjectID(nextweekId)}).then((response)=>{
                resolve(response)
            })
        })
    },
    
}