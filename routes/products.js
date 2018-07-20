const express = require('express');
const router = express.Router();

const config = require('../config/database');
const Product = require('../models/product');

router.get('/',(req,res,next)=>{
    Product.getProducts((err,products)=>{
        
        if(err) throw err;
        if(products.length==0){
            return res.status(200).send({success:true,products:[]})
        }else{
            return res.status(200).send({success:true,products})
        }
       
    })
})

module.exports = router;