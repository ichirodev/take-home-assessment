import type { NextApiRequest, NextApiResponse } from 'next'
import cloudinary from 'cloudinary';
import fs from 'fs';
import path from 'path';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const base64Image  = req.body.base64;

    const result = await cloudinary.v2.uploader.upload(base64Image, {
        folder: 'profile_pictures',
    });

    res.status(200).json({ url: result.secure_url });
}