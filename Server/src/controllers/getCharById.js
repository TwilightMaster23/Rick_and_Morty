const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"
const errorHandler = require('../utils/errors')

const getCharById = async (req, res) => {
    const { id } = req.params

    try {
      const { data } = await axios(`${URL}/${id}`)
      
      const { status, name, species, origin, image, gender} = data
    
      const character = { id, status, name, species, origin, image, gender}
      
      res.status(200).json(character)
    } catch (error) {
        errorHandler(res,error)
    }

}


module.exports = getCharById;