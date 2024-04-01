const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    const city=req.query.city;
    console.log(city);
    res.render('index.ejs',{title:'Weather App'});
});

module.exports=router