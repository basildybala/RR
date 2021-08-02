
var db=require('../dbconnection/connection')
var collection=require('../dbconnection/collections')
var {ObjectID}=require('mongodb');
const { response } = require('express');



module.exports={
    getMalayalamMovies:(req,res)=>{
        
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let malayalamMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Malayalam'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(malayalamMovies)
        })
    },
    getTamilMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let tamilMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Tamil'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(tamilMovies)
        })
    },
    getTeluguMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let teluguMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Telugu'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(teluguMovies)
        })
    },
    getHindiMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let hindiMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Hindi'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(hindiMovies)
        })
    },
    getHollywoodMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let hollywoodMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Hollywood'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(hollywoodMovies)
        })
    },
    getOtherMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            const {page=1,limit=30}=req.query;
            let otherMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({category:'Other'}).sort({_id:-1}).limit(limit*1).skip((page-1)*limit).toArray()
            resolve(otherMovies)
        })
    },
    getLatestUpdate:()=>{
        return new Promise(async(resolve,reject)=>{
            let latestupdatemovies=await db.get().collection(collection.MOVIES_COLLECTION).find().sort({_id:-1}).limit(8).toArray()
            resolve(latestupdatemovies)
        })
    },
    getTrendingMovies:(req,res)=>{
        return new Promise(async(resolve,reject)=>{
            
            let trendingMovies=await db.get().collection(collection.MOVIES_COLLECTION).find({trending:'yes'}).sort({_id:-1}).limit(8).toArray()
            resolve(trendingMovies)
        })
    },
    getLatestNextweek:()=>{
        return new Promise(async(resolve,reject)=>{
            let nextweekmovies=await db.get().collection(collection.NEXT_WEEK_COLLECTION).find().sort({_id:-1}).limit(8).toArray()
            resolve(nextweekmovies)
        })
    },
    
    
    

}
