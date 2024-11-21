import express from 'express';
import UserController from './UserController';
import { validateUser } from './UserMiddleWare';

const router = express.Router();

router.get('/:id', UserController.getUser);
router.put('/:id', validateUser, UserController.updateUser);

export default router;