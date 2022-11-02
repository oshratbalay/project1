const axios = require("axios");

const get_popular_kids = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2`
  );
  return data.results;
};

const get_popular = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=698c26f192e68da611452c5592599ea2`
  );
  return data.results;
};

const get_upcoming= async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=698c26f192e68da611452c5592599ea2`
  );
  return data.results;
};

const get_top_rate = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=698c26f192e68da611452c5592599ea2`
  );
  return data.results;
};
module.exports = { get_popular, get_popular_kids ,get_top_rate , get_upcoming};
