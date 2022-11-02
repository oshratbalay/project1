const get_movie = require('../DAL/movieDAL')



const all_movie = async() => {
let allMovies = []
let kids_movie =await get_movie.get_popular_kids()
let map_kids = kids_movie.map(movie => allMovies.push(movie))
let popular_movie =await get_movie.get_popular()
let map_popular = popular_movie.map(movie => allMovies.push(movie))
let top_rate_movie =await get_movie.get_top_rate()
let map_top_rate = top_rate_movie.map(movie => allMovies.push(movie))
let upcoming_movie =await get_movie.get_upcoming()
let map_upcoming = upcoming_movie.map(movie => allMovies.push(movie))
// console.log(allMovies.length);

const uniqueIds = [];

const unique = allMovies.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});


return unique
}

module.exports = {all_movie}