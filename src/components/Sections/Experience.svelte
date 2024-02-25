<script>
    import ExperienceCard from '../Cards/ExperienceCard.svelte';

    export let experienceDetails;
    export let experienceTags;
    
    let selectedExperienceTag = experienceTags[0];
</script>

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
