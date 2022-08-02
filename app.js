const { error } = require('console')
const express= require('express')
const mysql=require('mysql')
const app = express()
const dataroute= require('./data')
const createrout= require('./create')
const connectdb= require('./db')
const updaterout=require('./update')
//to read json data sent from post req
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




app.get('/',(req,res)=>{
    res.send('welcome to company portal')
})

app.use('/data',dataroute)
app.use('/create',createrout)
app.use('/update',updaterout)



app.listen(314)