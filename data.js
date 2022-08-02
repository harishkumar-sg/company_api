const express = require('express')
const router= express.Router()
const connectdb= require('./db')

//getting user by name
router.get('/name/:val',(req,res)=>{
    const val= req.params.val;
    connectdb.query(`select * from employee where name=$1 `,[val],(err,data)=>{
        if(err){
            return console.log('error')
        }
        else {
             res.send(data.rows)
           
        }
    })
    
})

// to fetch the info from pincode
router.get('/location/:pincode',(req,res)=>{
    const pincode=req.params.pincode
    connectdb.query('select depart_location.loc,depart_location.pincode, employee.name,employee.role,employee.depart_id from depart_location left join employee on depart_location.depart_id=employee.depart_id where pincode=$1 ',[pincode],(err,data)=>{
        if(err){
             console.log('err')
        }
        else res.send(data.rows)

    })
})


//to get all data 
router.get('/',(req,res)=>{
    
    connectdb.query('select * from employee ',(err,data)=>{
        if(err){
            return console.log('error')
        }
        else {
             res.send(data.rows)
           
        }
    })
})

module.exports=router