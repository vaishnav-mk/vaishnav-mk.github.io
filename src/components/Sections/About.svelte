<script>
	import SvelteMarkdown from 'svelte-exmarkdown';
	import Button from '../Buttons/Button.svelte';
	export let data;

	const { description, links } = data?.about || {};
</script>

<div class="flex flex-col justify-between dark:text-zinc-300">
	<h1 class="text-4xl font-bold text-start">About Me</h1>
	<div class="border-t-2 w-full mt-2 dark:border-neutral-700"></div>

	<div class="mt-5 flex flex-wrap flex-col gap-4">
		{#if description}
			{#each description as desc}
				<p class="text-lg mb-4">
					<SvelteMarkdown md={desc} />
				</p>
			{/each}
		{/if}
		{#if links}
			<div class="flex flex-wrap gap-4 mt-4">
				{#each links as link}
					<Button {...link} />
				{/each}
			</div>
		{/if}
	</div>
</div>
