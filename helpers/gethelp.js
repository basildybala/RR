
var db=require('../dbconnection/connection')
var collection=require('../dbconnection/collections')
var {ObjectID}=require('mongodb');
const { response } = require('express');



module.exports={
    getMalayalamMovies:()=>{
        return new Promise(async(resolve,reject)=>{
            let malayalamMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'malayalam'}).toArray()
            resolve(malayalamMovies)
        })
    },

}
