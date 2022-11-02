const express = require('express')
const movie_BLL = require('../BLL/movieBLL')
const tv_BLL = require('../BLL/tvBLL')

const router = express.Router()

router.get('/movie', async(req,res )=>{
    try{
    const all_movie =  await movie_BLL.all_movie()
      res.status(200).json(all_movie)}
      catch(e){
     res.status(500).json(e)
      }
  
})

router.get('/tv', async(req,res )=>{
    try{
    const all_movie =  await tv_BLL.get_all_tv()
      res.status(200).json(all_movie)}
      catch(e){
     res.status(500).json(e)
      }
  
})

module.exports = router