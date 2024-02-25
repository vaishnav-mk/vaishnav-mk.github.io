<script>
	import ProjectCard from '../Cards/ProjectCard.svelte';

	export let projectDetails;
	export let projectTags;

	let selectedProjectTag = projectTags[0];
</script>

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
		{#each projectDetails as project}
			{#if project.tags.includes(selectedProjectTag)}
				<ProjectCard
					title={project.title}
					location={project.location}
					duration={project.duration}
					description={project.description}
					links={project.links}
					image={project.image}
				/>
			{/if}
		{/each}
	</div>
</div>
