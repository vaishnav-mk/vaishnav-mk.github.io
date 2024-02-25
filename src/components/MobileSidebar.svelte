<script>
	import logo from '$lib/images/me.jpg';
	export let data;
</script>

<aside class="w-full flex md:hidden gap-2 p-2 bg-zinc-100 border-b-1">
	<div class="">
		<img src={logo} alt="Vaishnav Manoj" class="w-14 h-14 rounded-full" />
	</div>
	<div class="flex flex-col justify-center">
		<h1 class="text-xl font-bold">{data.name}</h1>
		<p class="text-sm">Bachelor of Technology undergraduate at SRMIST</p>
	</div>
</aside>
