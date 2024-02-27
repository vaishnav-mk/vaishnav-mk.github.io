<script>
	import SvelteMarkdown from 'svelte-exmarkdown';

	import Button from '../Buttons/Button.svelte';

	export let data;
</script>

<div class="flex flex-col justify-between">
	<h1 class="text-4xl font-bold text-start">About Me</h1>
	<div class="border-t-2 w-full mt-2"></div>

	<div class="mt-5 flex flex-wrap gap-4">
		<p class="text-lg mb-4">
			<SvelteMarkdown md={data?.about} />
		</p>
		{#each Object.entries(data.socials) as [key, value]}
			{#if ['Email', 'Github', 'LinkedIn', 'Twitter'].includes(key)}
				<Button text={key} link={value} firstUpperCase {...value} />
			{/if}
		{/each}
	</div>
</div>
