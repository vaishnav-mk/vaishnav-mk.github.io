<script>
	import About from '../components/Sections/About.svelte';
	import Section from '../components/Sections/Section.svelte';

	import ProjectCard from '../components/Cards/ProjectCard.svelte';
	import ExperienceCard from '../components/Cards/ExperienceCard.svelte';
	import CommunityCard from '../components/Cards/CommunityCard.svelte';

	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	import Footer from '../components/Footer.svelte';

	import data from '../data/data.json';

	const { info, sections } = data;
	const { navbar: NavData, footer: FooterData } = info;
</script>

<div>
	<Nav {NavData} />
	<div class="flex flex-col md:flex-row max-w-7xl md:mx-auto md:gap-4 md:m-4">
		<Sidebar data={info} />
		<MobileSidebar data={info} />
		<main class="md:w-3/4 overflow-y-auto p-10">
			<div class="min-w-screen min-h-screen">
				<div class="container mx-auto max-w-5xl mt-5">
					<About data={info} />
					{#each sections as sectionData}
						<Section {sectionData} />
					{/each}
				</div>
			</div>
		</main>
	</div>
	{#if data.footer}
		<Footer data={FooterData} />
	{/if}
</div>
