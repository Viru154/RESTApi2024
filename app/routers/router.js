
let express = require('express');
let router = express.Router();
 
const Libros = require('../controllers/controller.js');

router.post('/api/Libros/create', Libros.create)
/*
router.get('/api/song/all', song.retrieveAllSong);
router.get('/api/song/onebyid/:id', song.getSongById);
router.get('/api/song/filteringbyname', song.filteringByName);
//router.get('/api/song/pagination', song.pagination);
//router.get('/api/song/pagefiltersort', song.pagingfilteringsorting);
router.put('/api/song/update/:id', song.updateById);
router.delete('/api/song/delete/:id', song.deleteById); 
*/
module.exports = router;