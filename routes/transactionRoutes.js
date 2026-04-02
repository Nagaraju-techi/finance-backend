const router = require('express').Router();
const ctrl = require('../controllers/transactionController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.post('/', auth, role(['admin']), ctrl.create);
router.get('/', auth, role(['admin','analyst']), ctrl.getAll);
router.put('/:id', auth, role(['admin']), ctrl.update);
router.delete('/:id', auth, role(['admin']), ctrl.delete);

module.exports = router;