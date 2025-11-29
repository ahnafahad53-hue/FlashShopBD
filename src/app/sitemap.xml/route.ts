import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  // Dynamically get the domain serving the sitemap
  const url = new URL(request.url);
  const baseUrl = url.origin; // e.g., https://flashshop.com or http://localhost:3000
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: 'products', priority: '0.9', changefreq: 'daily' },
    { url: 'reviews', priority: '0.7', changefreq: 'weekly' },
    { url: 'contact', priority: '0.6', changefreq: 'monthly' },
    { url: 'checkout', priority: '0.5', changefreq: 'monthly' },
  ];

  // Add all product pages
  const productPages = products.map(product => ({
    url: `products/${product.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const allPages = [...pages, ...productPages];

  const urls = allPages.map(
    (page) => `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${urls}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
