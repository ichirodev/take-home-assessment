import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/services/prisma'
import { Contact } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  
  const userId = req.body.userId;
  const contactName: string = req.body.name;
  const contactEmail: string | undefined = req.body.email;
  const contactPicture: string | undefined = req.body.picture;

  const result = await prisma.contact.create({
    data: {
      ownerId: userId,
      name: contactName,
      email: contactEmail,
      picture: contactPicture,
    }
  });

  res.status(200).json(result);
}