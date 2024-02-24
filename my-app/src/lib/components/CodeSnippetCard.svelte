<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'
    import { deleteSnippet, toggleFavorite } from '../SnippetStore';
    
    export let snippet : CodeSnippet = {
        question: "",
        link: "",
        code: "",
        favorite: false
    }

    export let index : number
</script>

<div class="card">
    <header class="card-header">
        {snippet.question}
        <div class="float-right">
            <button type="button" class="btn btn-sm variant-filled-secondary" on:click={() => toggleFavorite(index)}>{ snippet.favorite ? 'Unfavorite' : 'Favorite'}</button>
            <button type="button" class="btn btn-sm variant-filled-error" on:click={() => deleteSnippet(index)}>Delete</button>
        </div>
    </header>
    <section class="p-4">
        <CodeBlock language={"Javascript"} code={snippet.code}/>
    </section>
</div>