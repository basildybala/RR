
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
                    category:movieDetails.category,
                    releasedate:movieDetails.releasedate,
                    director:movieDetails.director,
                    producedby:movieDetails.producedby,
                    genre:movieDetails.genre,
                    duration:movieDetails.duration,
                    story:movieDetails.story,
                    yttrailorlink:movieDetails.yttrailorlink,
                    ytlink:movieDetails.ytlink,
                    ytlink1:movieDetails.ytlink1,
                    ytlink2:movieDetails.ytlink2,
                    ytlink3:movieDetails.ytlink3,
                    actid1:movieDetails.actid1,
                    actid2:movieDetails.actid2,
                    actid3:movieDetails.actid3,
                    actid4:movieDetails.actid4,
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
                    biography:actorDetails.biography
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
    
}