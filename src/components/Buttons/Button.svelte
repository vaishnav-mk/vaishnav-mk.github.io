<script>
	export let text, link, firstUpperCase;

    text = firstUpperCase ? text.charAt(0).toUpperCase() + text.slice(1) : text;
</script>

<a href={link} class="text-blue-700 bg-blue-100 rounded-md px-4 py-2 hover:bg-blue-200 transition-all duration-300">{text}</a>
