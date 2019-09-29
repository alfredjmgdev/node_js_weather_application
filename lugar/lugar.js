const axios = require('axios');

const getLugarLatLong = async( dir ) => {

    const encodedUlr = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Key': 'd40ca99b1emsh909005214cc872bp16b9e8jsnd5d671f0e014'}
      });
    
      const resp = await instance.get();

      if( resp.data.Results.length === 0 ){
          throw new Error(`No hay resultados para ${ dir }`);
      }

      const data        = resp.data.Results[0];
      const direccion   = data.name;
      const lat         = data.lat;
      const lng         = data.lon; 

      return {
          direccion,
          lat,
          lng
      }

}

module.exports = {
    getLugarLatLong
}