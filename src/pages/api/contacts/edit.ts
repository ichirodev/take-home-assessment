import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/services/prisma'
import { Contact } from '@prisma/client';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  const userId = req.body.userId;
  const contactId = req.body.contactId;
  const contactEmail = req.body.email;
  const contactName = req.body.name;

  const result = await prisma.contact.update({
    where: {
      ownerId: userId,
      id: contactId
    },
    data: {
      email: contactEmail,
      name: contactName
    }
  });

  res.status(200).json(result);
}