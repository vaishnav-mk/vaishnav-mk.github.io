<script>
	import Markdown from 'svelte-exmarkdown';
	import Button from '../Buttons/Button.svelte';

	export let title,
		description,
		links,
		image,
		location,
		duration,
		designation,
		onHover,
		defaultAsset;

	let img_url = `/images/${image ?? defaultAsset}`;

	let values = { title, description, links, image, location, duration, designation };
	let originalValues = {};

	function storeOriginalValues() {
		originalValues = { ...values };
	}

	function handleHover() {
		if (onHover) {
			const { image: hoverImage, ...hoverProps } = onHover[0];
			img_url = `/images/${hoverImage ?? image ?? defaultAsset}`;
			Object.keys(hoverProps).forEach((prop) => {
				if (prop in originalValues) {
					values[prop] = hoverProps[prop];
				}
			});
		}
	}

	function handleMouseLeave() {
		img_url = `/images/${image ?? defaultAsset}`;
		values = { ...originalValues };
	}

	$: storeOriginalValues();
</script>

<div
	class="border rounded-lg dark:bg-zinc-900 dark:border-neutral-700 cursor-default"
	role="button"
	on:mouseenter={handleHover}
	on:mouseleave={handleMouseLeave}
	tabindex="0"
>
	<div class="flex md:flex-row flex-col p-4 gap-4">
		<div class="md:w-1/4 rounded-lg">
			<img src={img_url} alt="Experience Logo" class="rounded-lg" />
		</div>
		<div class="md:w-3/4 flex flex-col">
			<div class="flex flex-col md:flex-row justify-between">
				<div class="flex flex-col">
					<div class="font-bold text-lg">{values.title}</div>
					<div class="text-md">{values.designation}</div>
				</div>
				<div class="flex flex-col">
					<h1 class="text-sm md:ml-4 font-semibold justify-end flex">{values.duration}</h1>
					<h1 class="text-sm md:ml-4 justify-end flex">{values.location}</h1>
				</div>
			</div>
			<ul class="list-disc mt-4 ml-8">
				{#each values.description as desc}
					<li><Markdown md={desc} /></li>
				{/each}
			</ul>
			{#if values.links}
				<div class="flex flex-wrap gap-4 mt-4">
					{#each values.links as link}
						<Button {...link} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
