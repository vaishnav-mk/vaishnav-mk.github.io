<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<footer class="bg-zinc-100 p-6 z-10 border-t">
	<div class="flex justify-center">
		<p>
			<SvelteMarkdown source={data?.footer} />
		</p>
	</div>
</footer>
