const mongoose=require('mongoose')

const fruitModel=new mongoose.Schema({
    name:{
         type:String,
         required:true,
         unique:true
    },
    unit:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Fruits',fruitModel)