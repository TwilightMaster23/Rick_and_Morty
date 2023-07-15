const { Favorite } = require('../DB_connection')

const deleteFav = async (req, res) => {
    const { id } = req.params

    try {
        const favDelete = await Favorite.findByPk(id)
        await favDelete.destroy();
        const favorites = await Favorite.findAll()
        return res.status(200).json(favorites);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = deleteFav;