const tv_DAL = require('../DAL/tvDAL')
const { all } = require('../router/router')

const get_all_tv = async() =>{
    let allTv = []
let top_rated =await tv_DAL.get_top_rate_tv()
let map_top_rate = top_rated.map(tv => allTv.push(tv))
let popular =await tv_DAL.get_popular_tv()
let map_popular = popular.map(tv => allTv.push(tv))
let airing_today =await tv_DAL.get_airing_today_tv()
let map_airing_today = airing_today.map(tv => allTv.push(tv))
let on_the_air =await tv_DAL.get_on_the_air_tv()
let map_on_the_air = on_the_air.map(tv => allTv.push(tv))




const uniqueIds = [];

const unique = allTv.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});

return(unique);
}


module.exports = {get_all_tv}
