import { Request, Response } from 'express';
import prisma from '../prismaClient';

class PostController {
  async createPost(req: Request, res: Response) {
    const { title, content, userId } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });

    res.status(201).json(post);
  }

  async getPosts(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      include: { user: true, comments: true },
    });

    res.json(posts);
  }
}

export default new PostController();