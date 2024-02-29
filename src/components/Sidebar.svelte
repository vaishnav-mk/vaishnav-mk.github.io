<script>
	import Icon from '@iconify/svelte';
	import logo from '$lib/images/me.jpg';
	export let data;

	const socials = Object.entries(data?.socials || []);
</script>

<aside class="md:w-1/5 md:h-full w-full md:sticky md:top-0 md:min-h-screen p-5 hidden md:block">
	<div class="flex flex-col items-start">
		<img src={logo} alt="Vaishnav Manoj" class="w-48 h-48 rounded-full mx-auto mb-5" />
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
		<ul class="grid grid-cols-2 gap-1 mt-3">
			{#each socials as [key, value]}
				<a
					href={value?.link}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-zinc-100 p-2 rounded-md hover:bg-zinc-200 flex items-center gap-2 transition-all duration-300"
				>
					<Icon icon={value?.icon} class="text-xl" />
					{key}
				</a>
			{/each}
		</ul>
	</div>
</aside>
