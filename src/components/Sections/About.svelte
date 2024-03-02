<script>
	import SvelteMarkdown from 'svelte-exmarkdown';
	import Button from '../Buttons/Button.svelte';
	export let data;

	const socials = Object.entries(data?.socials || {});
</script>

<div class="flex flex-col justify-between dark:text-slate-400">
	<h1 class="text-4xl font-bold text-start">About Me</h1>
	<div class="border-t-2 w-full mt-2 dark:border-slate-500"></div>

	<div class="mt-5 flex flex-wrap gap-4">
		<p class="text-lg mb-4">
			<SvelteMarkdown md={data?.about} />
		</p>
		{#each socials as [key, value]}
			{#if ['Email', 'Github', 'LinkedIn', 'Twitter'].includes(key)}
				<Button text={key} link={value} firstUpperCase {...value} />
			{/if}
		{/each}
	</div>
</div>
