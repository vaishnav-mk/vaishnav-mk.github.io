<script>
	export let title;
	export let items;
	export let Card;
	export let displayTags = false;

	let tags = [...new Set(items.flatMap((item) => item.tags))];
	let selectedTag = tags[0];

	displayTags = tags.length > 1 || displayTags;
</script>

<div class="flex flex-col items-center mt-28">
	<div class="flex justify-between w-full items-center">
		<h1 class="text-4xl font-bold text-start w-full">{title}</h1>
		{#if displayTags}
			<div class="flex gap-4 w-full justify-end items-center">
				{#each tags as tag}
					<button
						class={`text-lg font-thin cursor-pointer ${
							selectedTag === tag
								? 'text-zinc-800 underline underline-offset-2'
								: 'text-neutral-600'
						}`}
						on:click={() => (selectedTag = tag)}
					>
						{tag}
					</button>
					{#if tags.length > 1 && tag !== tags[tags.length - 1]}
						<span class="text-lg font-thin mx-2">/</span>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	<div class="border-t-2 w-full mt-2"></div>
	<div class="grid grid-cols-1 gap-4 mt-4">
		{#each items as item}
			{#if item.tags.includes(selectedTag)}
				<Card {...item} />
			{/if}
		{/each}
	</div>
</div>
