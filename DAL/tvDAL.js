const axios = require('axios')


const get_top_rate_tv = async() =>{
    const {data} = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=698c26f192e68da611452c5592599ea2')
    return(data.results);
}

const get_popular_tv = async() =>{
    const {data} = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=698c26f192e68da611452c5592599ea2')
    return(data.results);
}

const get_airing_today_tv = async() =>{
    const {data} = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=698c26f192e68da611452c5592599ea2')
    return(data.results);
}

const get_on_the_air_tv = async() =>{
    const {data} = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=698c26f192e68da611452c5592599ea2')
    return(data.results);
}

module.exports = {get_airing_today_tv ,get_on_the_air_tv ,get_popular_tv ,get_top_rate_tv}