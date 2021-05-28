
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
    getTamilMovies:()=>{
        return new Promise(async(resolve,reject)=>{
            let tamilMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'tamil'}).toArray()
            resolve(tamilMovies)
        })
    },
    getTeluguMovies:()=>{
        return new Promise(async(resolve,reject)=>{
            let teluguMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'telugu'}).toArray()
            resolve(teluguMovies)
        })
    },
    getHindiMovies:()=>{
        return new Promise(async(resolve,reject)=>{
            let hindiMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'hindi'}).toArray()
            resolve(hindiMovies)
        })
    },
    

}
