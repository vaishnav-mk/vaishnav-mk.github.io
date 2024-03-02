<script>
	import Button from './Buttons/Button.svelte';
	import Icon from '@iconify/svelte';
	export let data;

	const images = import.meta.glob(`$lib/images/*.{png,jpg,jpeg,PNG,JPEG}`, { eager: true });
	const img_url = images[`/src/lib/images/${data?.image || 'srm2.png'}`]?.default;

	const socials = Object.entries(data?.socials || []);
</script>

<aside class="md:w-1/5 md:h-full w-full md:sticky md:top-0 md:min-h-screen p-5 hidden md:block dark:text-slate-400">
	<div class="flex flex-col items-start">
		<img src={img_url} alt="Vaishnav Manoj" class="w-48 h-48 rounded-full mx-auto mb-5" />
		<h1 class="text-xl font-bold">{data?.name}</h1>
		<p class="my-4">Bachelor of Technology undergraduate at SRMIST</p>
		<p class="flex items-center gap-2">
			<Icon icon="mdi:location" class="text-xl text-red-600" />
			{data?.location}
		</p>
		<p class="flex items-center gap-2">
			<Icon icon="mdi:university" class="text-xl" />
			SRM University
		</p>
		<ul class="flex flex-col gap-4 mt-5 w-full">
			{#each socials as [key, value]}
				<Button text={key} link={value?.link} icon={value?.icon} />
			{/each}
		</ul>
	</div>
</aside>
