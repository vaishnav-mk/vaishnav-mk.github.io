<script>
	export let NavData, defaultAsset;
	const { title, links, icon, separator } = NavData;

	const img_url = `/images/${icon || defaultAsset}`;
</script>

<nav
	class="bg-zinc-100 p-6 z-10 border-b dark:bg-[#1c1e20] dark:border-neutral-700 dark:text-zinc-300"
>
	<div class="container mx-auto max-w-7xl flex justify-between gap-10">
		<div class="flex items-center gap-4">
			{#if icon}
				<img src={img_url} alt="logo" class="w-14 h-14 rounded-full" />
			{/if}
			<a class="text-gray-500 text-lg font-bold link-hover-border" href="/">{title}</a>
		</div>
		<div class="flex gap-4 items-center">
			{#each links as { title, url }, index}
				<a
					class="text-zinc-300 text-lg font-semibold link-hover-border"
					target="_blank"
					rel="noopener noreferrer"
					href={url}>{title}</a
				>
				{#if separator && index !== links.length - 1}
					<span class="text-gray-400">{separator}</span>
				{/if}
			{/each}
		</div>
	</div>
</nav>
