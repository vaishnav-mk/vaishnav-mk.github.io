import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	extension: ['.yml', '.yaml'],
	plugins: [sveltekit()]
});
