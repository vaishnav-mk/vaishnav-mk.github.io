<script>
	import Markdown from 'svelte-exmarkdown';
	import Toggle from './Buttons/Toggle.svelte';

	export let data;
</script>

<footer class="bg-zinc-100 p-6 z-10 border-t flex justify-between dark:bg-slate-800 dark:border-indigo-950 dark:text-slate-400">
	<Markdown md={data} />
	<Toggle />
</footer>
