<script>
	import Markdown from 'svelte-exmarkdown';
	import Toggle from './Buttons/Toggle.svelte';
	import Icon from '@iconify/svelte';

	export let data, darkMode;

	const githubLink = 'https://github.com/vaishnav-mk/academic-portfolio';
</script>

<footer
	class={`bg-zinc-100 p-6 z-10 border-t flex items-center justify-between dark:bg-[#1c1e20] dark:border-neutral-700 dark:text-stone-300`}
>
	<div class="flex md:flex-row flex-row items-center w-full justify-between">
		<Markdown md={data} />
		<div class="flex flex-col md:flex-row items-center justify-center gap-4">
			<a
				href={githubLink}
				class="ml-4 text-lg font-semibold underline decoration-dotted flex items-center gap-2 hover:text-blue-700 dark:hover:text-stone-300 hover:rotate-12 transition-all duration-300"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon icon="akar-icons:github-fill" class="" />
			</a>
			{#if darkMode}
				<Toggle />
			{/if}
		</div>
	</div>
</footer>
