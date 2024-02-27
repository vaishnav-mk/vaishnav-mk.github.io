<script>
	import Markdown from 'svelte-exmarkdown';

	export let data;
</script>

<footer class="bg-zinc-100 p-6 z-10 border-t">
	<div class="flex justify-center">
		<p>
			<Markdown md={data?.footer} />
		</p>
	</div>
</footer>
