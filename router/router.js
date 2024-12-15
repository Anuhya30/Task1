import express from 'express'
import {postdata} from '../controller/controller.js'
const express=require('express');
const router=express.router();
router.post('/api',postdata);
export default router;

