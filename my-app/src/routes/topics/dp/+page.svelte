<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'

    export let data
</script>


<div class="flex justify-center w-full">
    <div class="grid grid-cols-1 gap-5 p-8 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6 text-3xl">Just solved a question?</h3>
        <form class="card p-6 w-full text-token space-y-4 flex gap-3 flex-col items-center" method="post" action="?/create">
        <label class="label w-full">
            <span>Question</span>
            <input type="text" class="input" name="question" id="question" placeholder="Enter Question">
            </label>
            <label class="label w-full">
                <span>Link</span>
                <input type="text" class="input" name="link" id="link" placeholder="Enter Link">
            </label>
            <label class="label w-full">
                <span>Code</span>
                <textarea class="textarea" name="code" id="code" rows="4" placeholder="Enter Code Here"></textarea>
            </label>
        <button type="submit" class="btn btn-sm variant-filled-tertiary w-1/5">Add Solution</button>
        </form>
        <div class="text-center py-6">
            <h2 class="text-2xl pt-9">Your Solutions</h2>
        </div>
        {#each data?.records as snippet}
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
        {/each}

    </div>
</div>


