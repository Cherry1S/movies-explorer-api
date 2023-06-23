const router = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const { createMovieCelebrate, deleteMovieCelebrate } = require('../middlewares/reqValidation');

router.get('/', getMovies);
router.post('/', createMovieCelebrate, createMovie);
router.delete('/:_id', deleteMovieCelebrate, deleteMovie);

module.exports = router;
