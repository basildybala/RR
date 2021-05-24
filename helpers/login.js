var db=require('../dbconnection/connection')
var collection=require('../dbconnection/collections')
const bcrypt=require('bcrypt')


module.exports={
    doSignup:(adminData)=>{
        return new Promise(async(reslove,reject)=>{
            adminData.password=await bcrypt.hash(adminData.password,10)
            db.get().collection(collection.ADMIN_COLLECTION).insertOne(adminData).then((data)=>{
                reslove(data.ops[0])
            })
            
        })
    },


    doLogin:(adminData)=>{
        return new Promise(async(reslove,reject)=>{
            let loginStatus=false
            let response={}
            let admin=await db.get().collection(collection.ADMIN_COLLECTION).findOne({ID:adminData.ID})

            if(admin){
                bcrypt.compare(adminData.password,admin.password).then((status)=>{
                    if(status){
                        console.log('Login Success');
                        response.admin=admin
                        response.status=true
                        reslove(response)
                    }else{
                        console.log('Login Failed');
                        reslove({status:false})
                    }
                })
            }else{
                console.log('Login Fail');
                reslove({status:false})
            }
           
        })
    }

}
