<script>
    import CommunityCard from '../Cards/CommunityCard.svelte';

    export let communityDetails;
</script>

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
