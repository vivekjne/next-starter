const express = require('express');
const router = express.Router();

const config = require('../config/database');
const Slider = require('../models/slider');
const path = require('path');
const fs = require('fs')
router.get('/',(req,res,next)=>{
    Slider.getSliders((err,sliders)=>{
        
        if(err) throw err;
        if(sliders.length==0){
            return res.status(200).send({success:true,sliders:[]})
        }else{
            return res.status(200).send({success:true,sliders})
        }
       
    })
})

router.post('/add',(req,res,next)=>{
    console.log("body=",req)
    let newSlider = new Slider({
        name:req.body.name,
        image:`${req.body.name}.jpg`
    })

    req.files.image.mv(__dirname + '/images/'+req.files.image.name, function(err) {
        if (err) throw err
     
          Slider.addSlider(newSlider,(err,slider)=>{
            if(err){
                return res.send({success:false,error:err})
            }else{
                return res.send({success:true})
            }
        })
      });
  
})

module.exports = router;