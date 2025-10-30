import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://flashshop.com';
  const pages = [
    '',
    'products',
    'reviews',
    'contact',
    'checkout',
    'thank-you-order',
    'thank-you-contact',
  ];

  const urls = pages.map(
    (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
