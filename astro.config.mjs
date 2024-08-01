import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Skyfusion WebDev Bootcamp',
			social: {
				github: 'https://github.com/raamponsah/my-starlight-docs',
			},
			sidebar: [
				{
					label: 'HTML Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'HTML Introduction', slug: 'html-guides/html-intro' },
						{ label: 'HTML List', slug: 'html-guides/html-list' },
						{ label: 'HTML Links', slug: 'html-guides/html-links' },
						{ label: 'HTML Images', slug: 'html-guides/html-images' },
						{ label: 'Semantic HTML', slug: 'html-guides/semantic-html' },
					],
				},
				{
					label: 'CSS Guides',
					items: [
						// Each item here is one entry in the navigation menu.

					],
				},
				{
					label: 'JavaScript Guides',
					items: [
						// Each item here is one entry in the navigation menu.

					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
