<script lang="ts">
    import CodeSnippetCard from "../../CodeSnippetCard.svelte";
    import { snippetStore, addSnippet } from "../../SnippetStore";
    import type { PageData } from "./$types"

    export let data: PageData

    let formData : CodeSnippetInput = {
        question: "",
        link: "",
        code: ""
    }

    const handleAdd = () => {
        addSnippet(formData)
        formData = {
            question: "",
            link: "",
            code: ""
        }
    }

    snippetStore.set(data.snippets)
</script>

<div class="flex justify-center w-full">
    <div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6">Add Solution</h3>
        <div class="card p-4 w-full text-token space-y-4">
            <label class="label">
                <span>Question</span>
                <input type="text" class="input" placeholder="Enter Question" bind:value={formData.question}>
            </label>
            <label class="label">
                <span>Link</span>
                <input type="text" class="input" placeholder="Enter Link" bind:value={formData.link}>
            </label>
            <label class="label">
                <span>Code</span>
                <textarea class="textarea" rows="4" placeholder="Enter Code Here" bind:value={formData.code}></textarea>
            </label>
            <button type="button" class="btn btn-sm variant-filled-primary" on:click={() => addSnippet(formData)}>Add Solution</button>
        </div>
        <div class="text-center py-6">
            <h2>My Solutions</h2>
        </div>
        {#each $snippetStore as snippet, index}
        <CodeSnippetCard snippet={snippet} index={index}/>
        {/each}
    </div>
</div>