const getCharById = require('../controllers/getCharById');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav');
const getFav = require('../controllers/getFav');
const login = require('../controllers/login');
const { Router} = require('express')

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.get('/fav', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;
