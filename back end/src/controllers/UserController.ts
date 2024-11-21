import { Request, Response } from 'express';
import prisma from '../prismaClient';

class UserController {
  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: { email: true, name: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.json(updatedUser);
  }
}

export default new UserController();