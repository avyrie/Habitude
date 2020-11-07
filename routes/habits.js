const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authReq');

// Routes
router.get('/', ctrl.habits.index);
router.put('/:id', authRequired, ctrl.habits.update);
router.get('/:id', ctrl.habits.show);
router.post('/', authRequired, ctrl.habits.create);
router.delete('/:id', authRequired, ctrl.habits.destroy);

// exports
module.exports = router;
