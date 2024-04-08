<script>
	import Button from '../Buttons/Button.svelte';
	export let title, description, links, image, location, duration, designation;

	const images = import.meta.glob(`$lib/images/*.png`, { eager: true });

	const img_url = images[`/src/lib/images/${image || 'srm2.png'}`]?.default;
	import Markdown from 'svelte-exmarkdown';
</script>

<div class="border rounded-lg dark:bg-zinc-900 dark:border-neutral-700">
	<div class="flex md:flex-row flex-col p-4 gap-4">
		<div class="md:w-1/4 rounded-lg">
			<img src={img_url} alt="Experience Logo" class="rounded-lg" />
		</div>
		<div class="md:w-3/4 flex flex-col">
			<div class="flex flex-col md:flex-row justify-between">
				<div class="flex flex-col">
					<div class="font-bold text-lg">
						{title}
					</div>
					<div class="text-md">{designation}</div>
				</div>
				<div class="flex flex-col">
					<h1 class="text-sm md:ml-4 font-semibold justify-end flex">{duration}</h1>
					<h1 class="text-sm md:ml-4 justify-end flex">{location}</h1>
				</div>
			</div>
			<ul class="list-disc mt-4 ml-8">
				{#each description as desc}
					<li>
						<Markdown md={desc} />
					</li>
				{/each}
			</ul>
			{#if links}
				<div class="flex flex-wrap gap-4 mt-4">
					{#each links as link}
						<Button {...link} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
