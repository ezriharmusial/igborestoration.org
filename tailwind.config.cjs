/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		require('path').join(require.resolve('@skeletonlabs/skeleton')),
		'node_modules/preline/preline.js'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
    	require('autoprefixer'),
    	require('preline/plugin'),
		// Keep any existing plugins present and append the following:
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	],
}
