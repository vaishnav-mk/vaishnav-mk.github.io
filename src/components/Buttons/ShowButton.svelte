<script>
	export let onClick;
	export let text;
</script>

<div class="border-t-2 w-full mt-2 dark:border-neutral-700"></div>

<button
	class="text-blue-700 bg-blue-100 dark:bg-neutral-800 dark:text-blue-500 dark:hover:bg-neutral-600 rounded-b-md px-4 py-2 hover:bg-blue-200 transition-all duration-300 w-48 md:w-96 font-bold"
	on:click={onClick}>{text}</button
>
