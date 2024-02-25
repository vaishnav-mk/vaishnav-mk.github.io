<script>
	import ExperienceCard from '../components/Cards/ExperienceCard.svelte';
	import ProjectCard from '../components/Cards/ProjectCard.svelte';
	import Button from '../components/Buttons/Button.svelte';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import CommunityCard from '../components/Cards/CommunityCard.svelte';
	import MobileSidebar from '../components/MobileSidebar.svelte';
	const data = {
		name: 'Vaishnav Manoj',
		location: 'Chennai, India',
		university: 'SRM Institute of Science & Technology',
		googleScholar: 'https://scholar.google.com/citations?user=',
		socials: {
			'📩 Email': 'mailto:vaishnav240204@gmail.com',
			'🕊️ Twitter': 'https://twitter.com/vaishnav240204',
			'💼 LinkedIn': 'https://www.linkedin.com/in/vaishnav-manoj-2a3b3b1b3/',
			'🧑‍💻 Github': 'https://github.com/vaishnav-mk'
		}
	};

	const experienceDetails = [
		{
			title: 'Research Intern | Quantum Computing Lab',
			location: 'SRM Institute of Science & Technology, Chennai',
			duration: 'February 2024 - Present',
			description: [
				'Currently focused on developing an efficient method for data protection using Quantum Key Distribution (QKD) protocols.',
				"Engaged in the development of a Quantum Key Distribution protocol utilizing Qiskit and IBM Quantum Experience's Quantum Computers for practical implementation.",
				'Guided by Dr. Gayathri, Assistant Professor in the Department of Computer Science and Engineering at SRMIST, for insightful advice and direction.'
			],

			links: [
				{
					text: 'Github Link',
					link: 'https://github.com/vaishnav-mk/quantum-teleportation'
				}
			],
			image: 'srm.png',
			tags: ['Quantum']
		}
	];

	const projectDetails = [
		{
			title: 'Quantum Teleportation',
			description: [
				'Implemented the Quantum Teleportation algorithm using Qiskit and IBM Quantum Experience.',
				'Used the IBM Quantum Experience to simulate the quantum teleportation circuit and visualize the results.'
			],
			links: [
				{
					text: 'Github Link',
					link: 'https://google.com'
				},
				{
					text: 'Deployed Link',
					link: 'https://google.com'
				}
			],
			image: 'circuit.png',
			tags: ['Quantum']
		},
		{
			title: 'Hamiltonian Simulation',
			description: [
				'Implemented the Hamiltonian Simulation algorithm using Qiskit and IBM Quantum Experience.',
				'Used the IBM Quantum Experience to simulate the Hamiltonian Simulation circuit and visualize the results.'
			],
			links: [
				{
					text: 'Github Link',
					link: 'https://google.com'
				},
				{
					text: 'Deployed Link',
					link: 'https://google.com'
				}
			],
			image: 'hamiltonian.png',
			tags: ['Quantum', 'Full-Stack']
		}
	];

	const communityDetails = [
		{
			title: 'NextTech Lab',
			description: [
				'Contributing to the Machine Learning division at NextTech Lab, leveraging my expertise to explore the intersection of quantum computing and machine learning.',
				'Currently working on a project that involves the development of a Quantum Machine Learning model using Qiskit and IBM Quantum Experience.'
			],
			links: [
				{
					text: 'Website',
					link: 'https://nexttechlab.club/'
				}
			],
			image: 'ntl.png'
		}
	];

	const experienceTags = [...new Set(experienceDetails.flatMap((experience) => experience.tags))];
	const projectTags = [...new Set(projectDetails.flatMap((project) => project.tags))];

	let selectedExperienceTag = experienceTags[0];
	let selectedProjectTag = projectTags[0];
</script>

<div>
	<Nav name={data.name} portfolio="https://vaishnav.one" resume="/" />
	<div class="flex flex-col md:flex-row max-w-7xl md:mx-auto md:gap-4 md:m-4">
		<Sidebar {data} />
		<MobileSidebar {data} />
		<!-- Main content -->
		<main class="md:w-3/4 overflow-y-auto p-10">
			<div class="min-w-screen min-h-screen">
				<div class="container mx-auto max-w-5xl mt-5">
					<div class="flex items-center gap-10">
						<div class="flex flex-col justify-between">
							<h1 class="text-4xl font-bold text-start">About Me</h1>
							<div class="border-t-2 w-full mt-2"></div>

							<div class="mt-5">
								<p class="text-lg mb-4">
									I am an undergraduate student at SRM Intitute of Science & Technology, pursuing a
									bachelor’s degree in technology with specialization in Software Engineering.
									Currently, my research revolves around quantum key distribution protocols and
									error correction techniques. I am actively involved in investigating Quantum Key
									Distribution (QKD) under the mentorship of Dr. Gayathri M. Additionally, I
									contribute to the Machine Learning division at <a
										href="https://nexttechlab.club/"
										class="text-blue-400">NextTech Lab</a
									>, leveraging my expertise to explore the intersection of quantum computing and
									machine learning.
								</p>
								<div class="flex gap-4">
									{#each Object.entries(data.socials) as [key, value]}
										{#if ['📩 Email', '🧑‍💻 Github', '💼 LinkedIn', '🕊️ Twitter'].includes(key)}
											<Button text={key} link={value} firstUpperCase />
										{/if}
									{/each}
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col items-center mt-28">
						<div class="flex justify-between w-full items-center">
							<h1 class="text-4xl font-bold text-start w-full">Experience</h1>
							<div class="flex gap-4 w-full justify-end items-center">
								{#each experienceTags as tag}
									<button
										class={`text-lg font-thin cursor-pointer ${
											selectedExperienceTag === tag
												? 'text-zinc-800 underline underline-offset-2'
												: 'text-neutral-600'
										}`}
										on:click={() => (selectedExperienceTag = tag)}
									>
										{tag}
									</button>
									{#if tag !== experienceTags[experienceTags.length - 1]}
										<span class="text-lg font-thin mx-2">/</span>
									{/if}
								{/each}
							</div>
						</div>
						<div class="border-t-2 w-full mt-2"></div>
						<div class="grid grid-cols-1 gap-4 mt-4">
							{#each experienceDetails as experience}
								<ExperienceCard
									title={experience.title}
									location={experience.location}
									duration={experience.duration}
									description={experience.description}
									links={experience.links}
								/>
							{/each}
						</div>
					</div>
					<div class="flex flex-col items-center mt-28">
						<div class="flex justify-between w-full items-center">
							<h1 class="text-4xl font-bold text-start w-full">Projects</h1>
							<div class="flex gap-4 w-full justify-end items-center">
								{#each projectTags as tag}
									<button
										class={`text-lg font-thin cursor-pointer ${
											selectedProjectTag === tag
												? 'text-zinc-800 underline underline-offset-2'
												: 'text-neutral-600'
										}`}
										on:click={() => (selectedProjectTag = tag)}
									>
										{tag}
									</button>
									{#if projectTags.length > 1 && tag !== projectTags[projectTags.length - 1]}
										<span class="text-lg font-thin mx-2">/</span>
									{/if}
								{/each}
							</div>
						</div>
						<div class="border-t-2 w-full mt-2"></div>
						<div class="grid grid-cols-1 gap-4 mt-4">
							{#each projectDetails as experience}
								{#if experience.tags.includes(selectedProjectTag)}
									<ProjectCard
										title={experience.title}
										location={experience.location}
										duration={experience.duration}
										description={experience.description}
										links={experience.links}
										image={experience.image}
									/>
								{/if}
							{/each}
						</div>
					</div>
					<div class="flex flex-col items-center mt-28">
						<div class="flex justify-between w-full items-center">
							<h1 class="text-4xl font-bold text-start w-full">Communities</h1>
						</div>
						<div class="border-t-2 w-full mt-2"></div>
						<div class="grid grid-cols-1 gap-4 mt-4">
							{#each communityDetails as community}
								<CommunityCard
									title={community.title}
									location={community.location}
									duration={community.duration}
									description={community.description}
									links={community.links}
									image={community.image}
								/>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
	<Footer />
</div>
