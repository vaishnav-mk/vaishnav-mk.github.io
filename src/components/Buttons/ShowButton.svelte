<script>
    export let onClick;
    export let text;
</script>
<div class="border-t-2 w-full mt-2"></div>

<button class="text-blue-700 bg-blue-100 rounded-b-md px-4 py-2 hover:bg-blue-200 transition-all duration-300 w-48 md:w-96" on:click={onClick}>{text}</button>
