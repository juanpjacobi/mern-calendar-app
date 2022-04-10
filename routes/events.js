/* 
Rutas de events 
host + /api/events
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { fieldValidator } = require('../middlewares/fieldValidator');
const {check} = require('express-validator')
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require('../helpers/isDate');
const router = Router();

router.use(validateJWT);
// Obtener eventos 

router.get('/', getEvents);

// Crear evento  
router.post('/',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom(isDate),
        check('end', 'End date is required').custom(isDate),
        fieldValidator
    ],
 createEvent);

// Actualizar evento  
router.put('/:id',
[
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    fieldValidator
], updateEvent);

// Eliminar evento  
router.delete('/:id', deleteEvent);

module.exports =  router;

