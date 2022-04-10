/* 
Rutas de auth 
host + /api/auth
*/
const { check } = require('express-validator')
const { Router } = require('express');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validateJWT')
const router = Router();

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required and must be valid').not().isEmpty(),
        check('password', 'Password is required and must contain at least 6 characters').isLength({min: 6}),
        fieldValidator


    ],
    createUser
    );
router.post('/',
[
    check('email', 'Email is required and must be valid').not().isEmpty(),
    check('password', 'Password is required and must contain at least 6 characters').isLength({min: 6}),
    fieldValidator

], loginUser);
router.get('/renew',validateJWT, renewToken);

module.exports = router;