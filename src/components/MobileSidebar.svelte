<script>
	export let data;

	const images = import.meta.glob(`$lib/images/*.{png,jpg,jpeg,gif}`, { eager: true });
	const img_url = images[`/src/lib/images/${data?.image || 'srm2.png'}`]?.default;
</script>

<aside class="w-full flex md:hidden gap-2 p-2 bg-zinc-100 border-b-1 dark:border-indigo-950 dark:text-slate-400 dark:bg-slate-800">
	<div class="">
		<img src={img_url} alt="Vaishnav Manoj" class="w-14 h-14 rounded-full" />
	</div>
	<div class="flex flex-col justify-center">
		<h1 class="text-xl font-bold">{data?.name}</h1>
		<p class="text-sm">Bachelor of Technology undergraduate at SRMIST</p>
	</div>
</aside>
