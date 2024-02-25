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

	import experienceDetails from '../data/experience.json';
	import projectDetails from '../data/projects.json';
	import communityDetails from '../data/communities.json';
	import NavData from '../data/navbar.json';
	import data from '../data/info.json';
</script>

<div>
	<Nav {NavData} />
	<div class="flex flex-col md:flex-row max-w-7xl md:mx-auto md:gap-4 md:m-4">
		<Sidebar {data} />
		<MobileSidebar {data} />
		<main class="md:w-3/4 overflow-y-auto p-10">
			<div class="min-w-screen min-h-screen">
				<div class="container mx-auto max-w-5xl mt-5">
					<About {data} />
					<Section title="Projects" items={projectDetails} Card={ProjectCard} />
					<Section title="Experience" items={experienceDetails} Card={ExperienceCard} />
					<Section title="Communities" items={communityDetails} Card={CommunityCard} />
				</div>
			</div>
		</main>
	</div>
	<Footer />
</div>
