export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host === 'www.onyxmen.my' || host === 'localhost' || host === '127.0.0.1') {
    return context.next();
  }

  if (host.endsWith('.pages.dev') || host === 'onyxmen.my') {
    const target = `https://www.onyxmen.my${url.pathname}${url.search}`;
    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  return context.next();
}
