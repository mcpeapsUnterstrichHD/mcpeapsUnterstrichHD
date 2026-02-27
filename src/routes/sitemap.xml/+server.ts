import type { RequestHandler } from './$types';
import { languages } from '$lib/lang';

const DEFAULT_LOCALE = languages[0].code;

interface SitemapEntry {
	path: string;
	priority: number;
	changefreq: string;
}

const pages: SitemapEntry[] = [
	{ path: '/', priority: 1.0, changefreq: 'daily' },
	{ path: '/aboutme', priority: 0.8, changefreq: 'daily' },
	{ path: '/projects', priority: 0.8, changefreq: 'daily' },
	{ path: '/cv', priority: 0.8, changefreq: 'daily' },
	{ path: '/linkhub', priority: 0.8, changefreq: 'daily' },
	{ path: '/contact', priority: 0.5, changefreq: 'daily' },
	{ path: '/imprint', priority: 0.5, changefreq: 'daily' },
];

function buildUrl(origin: string, locale: string, path: string): string {
	if (locale === DEFAULT_LOCALE) {
		return `${origin}${path}`;
	}
	const suffix = path === '/' ? '/' : path;
	return `${origin}/${locale}${suffix}`;
}

export const GET: RequestHandler = async ({ url }) => {
	const origin = url.origin;
	const today = new Date().toISOString().split('T')[0];

	const urls = pages
		.map((page) => {
			const xhtmlLinks = languages
				.map(
				(loc) =>
					`    <xhtml:link rel="alternate" hreflang="${loc.code}" href="${buildUrl(origin, loc.code, page.path)}" />`
			).join('\n');

			return `  <url>
    <loc>${buildUrl(origin, DEFAULT_LOCALE, page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${xhtmlLinks}
  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600',
		},
	});
};
