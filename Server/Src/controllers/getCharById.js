const axios = require("axios");
const API_URL = "https://rickandmortyapi.com/api/character/"


function getById(res, id){
axios(API_URL + id)
    .then(response => {
    const { data } = response;
    const character = {
        id: +id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
    };
    res.writeHead(200, {"content-type":"aplication/json"});
    return res.end(JSON.stringify(character))
    })
    .catch(error => {
    res.writeHead(500, { "content-type":"text/plain" })
    return res.end(error.message);
    });
}


module.exports = {
    getById,
}