const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/projecttwo',()=>{console.log('connect to mondodb');})