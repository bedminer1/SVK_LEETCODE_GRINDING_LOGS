<script lang="ts">
    import CodeDisplayCard from '$lib/components/CodeDisplayCard.svelte';
    import CodeInput from '$lib/components/CodeInput.svelte';
    import { fetchData } from '$lib/store.js';

    // export let data
    let records: CodeSnippet[] = []
    $: {
    records = $fetchData || []
  }
</script>


<div class="flex justify-center w-full">
    <div class="grid grid-cols-1 gap-5 p-8 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6 text-3xl">Just solved a question?</h3>
        <CodeInput />
        <div class="text-center py-6">
            <h2 class="text-2xl pt-9">Linked-list</h2>
        </div>
        {#each records as snippet}
        {#if snippet.topic == 'linked-list'}
        <CodeDisplayCard {snippet} />   
        {/if}
        {/each}

    </div>
</div>
