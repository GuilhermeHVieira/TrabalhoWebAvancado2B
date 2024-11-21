import express from 'express';
import CommentController from './CommentController';

const router = express.Router();

router.post('/', CommentController.addComment);
router.get('/:postId', CommentController.getComments);

export default router;