//const mongoose=require('mongoose')
const fruitModel=require('../model/fruitsModel')

const createFruit= async (req,res) => {
    try{
      let data=req.query
      let {name,unit,price}=data

      const checkFruitName=await fruitModel.findOne({name:name})
      if(checkFruitName) return res.status(400).send({status:false,message:`fruit ${name} already exist`})

      if(!unit) return res.status(400).send({status:false,message:`unit must be present`})

      if(!price) return res.status(400).send({status:false,message:`price must be present`})

      let savedata=await fruitModel.create(data)
      return res.status(201).send({status:true,message:`created`,data:savedata})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})

    }
}


module.exports={createFruit}