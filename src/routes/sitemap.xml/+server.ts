/**
 * @module routes/sitemap.xml/+server
 * @description SvelteKit server endpoint that dynamically generates an XML sitemap
 * for search engine crawlers. Produces a standards-compliant sitemap following the
 * sitemaps.org protocol with `xhtml:link` hreflang annotations for multi-language
 * alternate URLs.
 *
 * The sitemap includes all public pages of the portfolio site and generates
 * locale-specific alternate URLs for each supported language (de-DE, en-US).
 * The default locale (first entry in `languages`) is served at the root path,
 * while non-default locales are prefixed (e.g. `/en-US/aboutme`).
 *
 * The response is cached for 1 hour via `Cache-Control: max-age=3600`.
 *
 * @see {@link $lib/lang} for the list of supported languages
 * @example
 * // GET /sitemap.xml returns XML with entries like:
 * // <url>
 * //   <loc>https://example.com/aboutme</loc>
 * //   <xhtml:link rel="alternate" hreflang="de-DE" href="https://example.com/aboutme" />
 * //   <xhtml:link rel="alternate" hreflang="en-US" href="https://example.com/en-US/aboutme" />
 * // </url>
 */

import type { RequestHandler } from './$types';
import { languages } from '$lib/lang';

/**
 * The default locale code, taken as the first entry from the languages configuration.
 * Pages with this locale are served without a locale prefix in the URL.
 * @constant {string}
 */
const DEFAULT_LOCALE = languages[0].code;

/**
 * Represents a single page entry in the sitemap.
 * @interface SitemapEntry
 * @property {string} path - The root-relative URL path (e.g. '/aboutme')
 * @property {number} priority - SEO priority from 0.0 to 1.0, where 1.0 is highest
 * @property {string} changefreq - Expected change frequency ('daily', 'weekly', etc.)
 */
interface SitemapEntry {
	path: string;
	priority: number;
	changefreq: string;
}

/**
 * Static registry of all public pages to include in the sitemap.
 * Each entry defines the path, SEO priority, and change frequency.
 * @constant {SitemapEntry[]}
 */
const pages: SitemapEntry[] = [
	{ path: '/', priority: 1.0, changefreq: 'daily' },
	{ path: '/aboutme', priority: 0.8, changefreq: 'daily' },
	{ path: '/projects', priority: 0.8, changefreq: 'daily' },
	{ path: '/cv', priority: 0.8, changefreq: 'daily' },
	{ path: '/linkhub', priority: 0.8, changefreq: 'daily' },
	{ path: '/contact', priority: 0.5, changefreq: 'daily' },
	{ path: '/imprint', priority: 0.5, changefreq: 'daily' },
];

/**
 * Constructs a fully qualified URL for a given locale and path.
 * For the default locale, the path is appended directly to the origin.
 * For non-default locales, the locale code is inserted as a path prefix.
 *
 * @param {string} origin - The site origin (e.g. 'https://mcpeapsunterstrichhd.dev')
 * @param {string} locale - The locale code (e.g. 'de-DE' or 'en-US')
 * @param {string} path - The root-relative page path (e.g. '/aboutme')
 * @returns {string} The full URL string for the given locale and path
 *
 * @example
 * buildUrl('https://example.com', 'de-DE', '/aboutme')
 * // => 'https://example.com/aboutme' (default locale)
 *
 * @example
 * buildUrl('https://example.com', 'en-US', '/aboutme')
 * // => 'https://example.com/en-US/aboutme'
 */
function buildUrl(origin: string, locale: string, path: string): string {
	if (locale === DEFAULT_LOCALE) {
		return `${origin}${path}`;
	}
	const suffix = path === '/' ? '/' : path;
	return `${origin}/${locale}${suffix}`;
}

/**
 * GET request handler that generates the XML sitemap response.
 * Iterates over all registered pages and all supported languages to produce
 * `<url>` entries with `<xhtml:link>` hreflang alternates.
 *
 * @param {object} context - SvelteKit request context
 * @param {URL} context.url - The request URL, used to extract the origin
 * @returns {Promise<Response>} XML response with Content-Type 'application/xml' and 1-hour cache
 */
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
