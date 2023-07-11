const router = require('express').Router();
const { editProfile, getUser } = require('../controllers/users');

const { editProfileCelebrate } = require('../middlewares/reqValidation');

router.get('/me', getUser);
router.patch('/me', editProfileCelebrate, editProfile);

module.exports = router;
