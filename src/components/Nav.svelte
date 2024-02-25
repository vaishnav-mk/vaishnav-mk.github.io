<script>
	export let name, portfolio, resume;
</script>

<nav class="bg-zinc-100 p-6 z-10 border-b">
	<div class="container mx-auto max-w-7xl flex justify-between gap-10">
		<a class="text-gray-500 text-lg font-bold link-hover-border" href="/">{name}</a>
		<div class="flex gap-4 items-center">
			<a class="text-zinc-400 text-lg font-semibold link-hover-border" href="https://vaishnav.one"
				>Portfolio</a
			>
            •
			<a class="text-zinc-400 text-lg font-semibold link-hover-border" href="/"> Resume </a>
		</div>
	</div>
</nav>
