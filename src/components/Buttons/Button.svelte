<script>
	import Icon from '@iconify/svelte';

	export let text, link, firstUpperCase, icon, iconOnly, buttonIcon;

	text = firstUpperCase ? text.charAt(0).toUpperCase() + text.slice(1) : text;
</script>

{#if iconOnly}
	<a href={link} target="_blank" rel="noopener noreferrer">
		<Icon {icon} />
	</a>
{:else}
	<a
		href={link}
		class="text-blue-700 bg-blue-100 rounded-md px-4 py-2 hover:bg-blue-200 transition-all duration-300 justify-center flex items-center gap-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:bg-zinc-700"
		target="_blank"
		rel="noopener noreferrer"
	>
		{#if icon || buttonIcon}
			<Icon {icon} class={`${iconOnly ? '' : 'mr-1'} text-xl`} />
		{/if}
		{#if text && !iconOnly}
			<span class="text-lg font-semibold">{text}</span>
		{/if}
	</a>
{/if}
