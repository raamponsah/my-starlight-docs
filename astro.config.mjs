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
					label: 'Web Essentials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Web/Internet', slug: 'web-essentials' },

					],
				},
				{
					label: 'HTML Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'HTML Introduction', slug: 'html-guides/html-intro' },
						{ label: 'HTML List', slug: 'html-guides/html-list' },
						{ label: 'HTML Links', slug: 'html-guides/html-links' },
						{ label: 'HTML Images', slug: 'html-guides/html-images' },
						{ label: 'Semantic HTML', slug: 'html-guides/semantic-html' },
						{ label: 'Project', slug: 'html-guides/html-project' },
					],
				},
				{
					label: 'CSS Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CSS Introduction', slug: 'css-guides/css-intro' },
						{ label: 'CSS Box Model', slug: 'css-guides/css-box-model' },
						{ label: 'CSS Flex', slug: 'css-guides/css-flex' },
						{ label: 'CSS Grid', slug: 'css-guides/css-grid' },
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
