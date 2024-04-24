<script>
	export let data, defaultAsset;
	const { sidebar } = data;

	const img_url = `/images/${data?.image || defaultAsset}`;
</script>

<aside
	class="w-full flex md:hidden gap-2 p-2 bg-zinc-100 border-b-1 dark:border-indigo-950 dark:text-slate-400 dark:bg-slate-800"
>
	<div class="">
		<img src={img_url} alt={data?.name} class="w-14 h-14 rounded-full" />
	</div>
	<div class="flex flex-col justify-center">
		<h1 class="text-xl font-bold">{data?.name}</h1>
		{#if sidebar?.description}
			<p class="text-sm">{sidebar?.description}</p>
		{/if}
	</div>
</aside>
