<script lang="ts">
    import { enhance } from "$app/forms";
    import { CodeBlock } from "@skeletonlabs/skeleton";
    
    export let snippet : CodeSnippet
</script>

<div class="card p-2">
    <header class="card-header">
        {snippet.question}
        <div class="float-right">
            <form action="?/delete" method="post">
                <input type="hidden" class="id" name="id" value={snippet.id}>
                <button type="submit" class="btn btn-sm variant-filled-error">Delete</button>
            </form>
        </div>
    </header>
    <section class="p-4">
        <CodeBlock language={"Javascript"} code={snippet.code}/>
    </section>
    <a href={snippet.link} target="_blank" class="m-5">link to question</a>
</div>