<script>
	export let data;

	import About from '../components/Sections/About.svelte';
	import Section from '../components/Sections/Section.svelte';

	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	import Footer from '../components/Footer.svelte';

	const { info, sections, config } = data;
	const { navbar: NavData, footer: FooterData } = info;
	const { darkMode, maxDisplay, addAllTag, defaultAsset } = config;
</script>

<div class="dark:bg-zinc-900 dark:text-white">
	{#if NavData}
		<Nav {NavData} />
	{/if}
	<div class="flex flex-col md:flex-row max-w-7xl md:mx-auto md:gap-4 md:m-4">
		<Sidebar data={info} />
		{#if NavData}
			<MobileSidebar data={info} />
		{/if}
		<main class="md:w-3/4 overflow-y-auto p-10">
			<div class="min-w-screen min-h-screen">
				<div class="container mx-auto max-w-5xl mt-5">
					{#if info}
						<About data={info} />
					{/if}
					{#each sections as sectionData}
						<Section
							{sectionData}
							{maxDisplay}
							addAllTag={sectionData.addAllTag ?? addAllTag}
							{defaultAsset}
						/>
					{/each}
				</div>
			</div>
		</main>
	</div>
	{#if FooterData}
		<Footer data={FooterData} {darkMode} />
	{/if}
</div>
