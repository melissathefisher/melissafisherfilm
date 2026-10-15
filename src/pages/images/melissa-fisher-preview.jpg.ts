import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { portraitPreview } from '../../data/portrait-preview';

export const GET: APIRoute = async () => {
  const { width, height, frameDown } = portraitPreview;
  const image = await sharp('public/images/melissa-fisher-og.jpg')
    .extract({
      left: 0,
      top: Math.round(height * frameDown),
      width,
      height,
    })
    .jpeg({ quality: 90 })
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
};
