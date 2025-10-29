import { NextRequest } from 'next/server';

// Simple proxy to Vecteezy API to avoid exposing the API key to the client.
// Expects env vars:
// - VECTEEZY_API_KEY
// - VECTEEZY_ACCOUNT_ID
// Usage: /api/vecteezy?q=bangladeshi%20people%20portrait&limit=30

const VECTEEZY_BASE_URL = 'https://api.vecteezy.com';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || 'Bangladeshi people portrait';
  const limitParam = searchParams.get('limit');
  const limit = Math.min(Math.max(Number(limitParam || '30'), 1), 60);

  const apiKey = process.env.VECTEEZY_API_KEY || '';
  const accountId = process.env.VECTEEZY_ACCOUNT_ID || '';

  if (!apiKey || !accountId) {
    return new Response(
      JSON.stringify({ error: 'Missing VECTEEZY_API_KEY or VECTEEZY_ACCOUNT_ID' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }

  // Build a search request. Vecteezy uses 'term' for search query and 'content_type' for filtering
  const url = new URL(`/v2/${accountId}/resources`, VECTEEZY_BASE_URL);
  url.searchParams.set('term', query);
  url.searchParams.set('content_type', 'photo');
  url.searchParams.set('per_page', String(limit));

  // Vecteezy API requires Authorization header with Bearer token format
  const headers: Record<string, string> = {
    'Authorization': `Bearer ${apiKey}`,
    'Accept': 'application/json'
  };

  try {
    const upstream = await fetch(url.toString(), { headers, cache: 'no-store' });
    if (!upstream.ok) {
      const text = await upstream.text();
      console.error('Vecteezy API Error:', upstream.status, text);
      // Return error details for debugging
      return new Response(
        JSON.stringify({ 
          error: 'Vecteezy API error', 
          status: upstream.status,
          message: text || 'Unknown error'
        }), 
        {
          status: upstream.status,
          headers: { 'content-type': 'application/json' }
        }
      );
    }
    const data = await upstream.json();

    // Extract image URLs from Vecteezy API response
    // Response structure: { resources: [{ thumbnail_url, thumbnail_2x_url, preview_url, ... }] }
    const resources: any[] = Array.isArray(data?.resources) ? data.resources : [];
    const images: string[] = resources
      .map((item) => item?.thumbnail_2x_url || item?.thumbnail_url || item?.preview_url)
      .filter((u: unknown) => typeof u === 'string' && u.length > 0);

    return new Response(JSON.stringify({ images }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: 'Failed to contact Vecteezy' }), {
      status: 502,
      headers: { 'content-type': 'application/json' }
    });
  }
}


