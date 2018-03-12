const express = require('express');
const router = express.Router();
const page = require('../models');

const pages= new page.Page;

router.get("/", (req,res,next)=>{
    res.redirect('/');
})

router.get('/add', (req, res, next)=>{
    res.render('addpage');
})

router.post("/", (req,res,next)=>{
    console.log(req.body, "<---");
    var newPage = new page.Page(req.body)
   
    
    
})

console.log()


module.exports=router;