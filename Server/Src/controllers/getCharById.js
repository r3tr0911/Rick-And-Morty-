const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { idChar } = req.params;

  if (isNaN(idChar)) {
    return res.status(400).send("ID inválido");
  }

  try {
    const { data } = await axios(`${URL}${idChar}`);
    const { id, name, status, species, origin, image, gender } = data;

    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin,
      image,
      gender,
    };

    return res.status(200).json(character);
  } catch (error) {
    return res
      .status(error.response?.status || 500)
      .send(error.response?.data?.error || "Error al obtener el personaje");
  }
}

module.exports = { getCharById };
