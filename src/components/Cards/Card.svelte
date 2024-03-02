<script>
	import Button from '../Buttons/Button.svelte';
	export let title, description, links, image, location, duration;

	const images = import.meta.glob(`$lib/images/*.png`, { eager: true });

	const img_url = images[`/src/lib/images/${image || 'srm2.png'}`]?.default;
	import Markdown from 'svelte-exmarkdown';
</script>

<div class="border rounded-lg dark:bg-gray-900 dark:border-slate-500">
	<div class="flex md:flex-row flex-col p-4 gap-4">
		<div class="md:w-1/4 rounded-lg">
			<img src={img_url} alt="Experience Logo" class="rounded-lg h-full" />
		</div>
		<div class="md:w-3/4 flex flex-col">
			<div class="flex flex-col md:flex-row justify-between">
				<div class="flex flex-col">
					<div class="font-bold text-lg">
						{title}
					</div>
					<div class="text-md">{location}</div>
				</div>
				<h1 class="text-sm md:ml-4 font-semibold justify-end flex">{duration}</h1>
			</div>
			<ul class="list-disc mt-4 ml-8">
				{#each description as desc}
					<li>
						<Markdown md={desc} />
					</li>
				{/each}
			</ul>
			<div class="mt-4 flex gap-4">
				{#each links as { text, link }}
					<Button {text} {link} />
				{/each}
			</div>
		</div>
	</div>
</div>
