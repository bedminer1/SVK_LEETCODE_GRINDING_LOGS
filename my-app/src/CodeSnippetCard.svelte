<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'
</script>

<div class="card">
    <header class="card-header">
        Question
        <div class="float-right">
            <button type="button" class="btn btn-sm variant-filled-secondary">Favourite</button>
            <button type="button" class="btn btn-sm variant-filled-error">Delete</button>
        </div>
    </header>
    <section class="p-4">
        <CodeBlock language={"Javascript"} code={`let foo = 'bar'`}/>
    </section>
</div>