import { Request, Response } from 'express';
import prisma from '../prismaClient';

class CommentController {
  async addComment(req: Request, res: Response) {
    const { postId, userId, content } = req.body;

    const comment = await prisma.comment.create({
      data: {
        postId,
        userId,
        content,
      },
    });

    res.status(201).json(comment);
  }

  async getComments(req: Request, res: Response) {
    const { postId } = req.params;

    const comments = await prisma.comment.findMany({
      where: { postId: Number(postId) },
      include: { user: true },
    });

    res.json(comments);
  }
}

export default new CommentController();