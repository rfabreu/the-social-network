const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/:reactions/:reactionID').delete(removeReaction);

module.exports = router;
