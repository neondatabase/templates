import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		open: true,
		port: 3000,
		host: '0.0.0.0'
	},
	preview: {
		open: true,
		port: 3000,
		host: '0.0.0.0'
	}
}

export default config
