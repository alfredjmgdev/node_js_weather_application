const axios = require('axios');

const getClima = async ( lat,lng ) => {
     
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2f28b04e908d980b8182f7299af489df&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}