<script>
	import ShowButton from '../Buttons/ShowButton.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Card from '../Cards/Card.svelte';

	export let sectionData;
	const { title, data: items } = sectionData;

	export let displayTags = false;
	export let showAll = false;

	let tags = [...new Set(items.flatMap((item) => item.tags))];
	let selectedTag = tags[0];

	const toggleShowAll = () => {
		showAll = !showAll;
	};

	onMount(() => {
		if (items.length <= 3) {
			showAll = true;
		}
	});

	displayTags = tags.length > 1 || displayTags;
</script>

<div class="flex flex-col items-center mt-28 dark:text-stone-300" id={title?.toLowerCase()}>
	<div class="flex flex-col md:flex-row justify-between w-full items-center">
		<a
			class="text-4xl font-bold text-start w-full text-neutral-600 dark:text-stone-300 transition duration-300 group"
			href={`#${title?.toLowerCase()}`}
		>
			<span>{title}</span>
			<span
				class="text-3xl font-bold text-neutral-600 dark:text-slate-400 hidden group-hover:inline"
				>#</span
			>
		</a>

		{#if displayTags}
			<div class="flex gap-4 w-full md:justify-end justify-start items-center">
				{#each tags as tag}
					<button
						class={`text-lg font-thin cursor-pointer ${
							selectedTag === tag
								? 'text-zinc-800 underline underline-offset-2 dark:text-stone-300'
								: 'text-neutral-600 dark:text-stone-300'
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
	<div class="border-t-2 w-full mt-2 dark:border-neutral-700"></div>
	{#each items.slice(0, showAll ? undefined : 3) as item}
		{#if item.tags.includes(selectedTag)}
			<div transition:slide={{ amount: 10 }} class="flex flex-col w-full gap-4 mt-5">
				<Card {...item} />
			</div>
		{/if}
	{/each}
	{#if items.length > 3}
		<ShowButton onClick={toggleShowAll} text={showAll ? 'Show less' : 'Show more'} />
	{/if}
</div>
