import * as path from "path";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	extension: ['.yml', '.yaml'],
	plugins: [sveltekit()],
	alias: {
		'@assets': path.resolve(__dirname, 'src/lib/images')
	}
});
