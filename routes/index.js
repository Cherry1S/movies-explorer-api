const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const {
  createUser, login,
} = require('../controllers/users');

const {
  loginCelebrate,
  createUserCelebrate,
} = require('../middlewares/reqValidation');

router.post('/signin', loginCelebrate, login);
router.post('/signup', createUserCelebrate, createUser);

router.use(authMiddleware);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Передан несуществующий запрос'));
});

module.exports = router;
