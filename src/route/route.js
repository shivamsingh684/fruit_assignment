const express=require('express')

const route=express.Router()

const {createFruit,getItems}=require('../controller/fruitsController')


//////////////create/////////////////
route.post('/createFruit',createFruit)

//////////getitems///////////////
route.get('/getItems',getItems)



module.exports=route  