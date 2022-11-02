const express  = require('express')
const cors = require('cors')

// require('./config/config')

const movie_router =require('./router/router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/chilTime',movie_router)

app.listen(8000 , ()=>console.log('listen to port 8000'))









// const axios = require('axios')

// const getData =async()=>{
// const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2')
// console.log(data);
// }