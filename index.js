import express from 'express';
import router from './src/router/router.js'
const express=require('express')
const app=express();
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log('server is running on port $(`port`)')
});
app.use('/api',router);