<script lang="ts">
    import CodeDisplayCard from '$lib/components/CodeDisplayCard.svelte';
    import CodeInput from '$lib/components/CodeInput.svelte';

    export let data
</script>


<div class="flex justify-center w-full">
    <div class="grid grid-cols-1 gap-5 p-8 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6 text-3xl">Just solved a question?</h3>
        <CodeInput />
        <div class="text-center py-6">
            <h2 class="text-2xl pt-9">Tree</h2>
        </div>
        {#each data?.records as snippet}
        {#if snippet.topic == 'tree'}
        <CodeDisplayCard {snippet} />   
        {/if}
        {/each}

    </div>
</div>
