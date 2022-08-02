const express= require('express')
const router= express.Router()
const connectdb= require('./db')

router.post('/',(req,res)=>{
    const {name,role,depart_id,emp_id}=req.body
    connectdb.query('insert into employee(name,role,depart_id,emp_id) values($1,$2,$3,$4) returning *',[name,role,depart_id,emp_id],(err,res)=>{
        if(err){
            return console.log('error')
        }
        else return console.log('data added successfully')
    })
    

})

module.exports=router