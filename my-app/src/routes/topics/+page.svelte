<script lang="ts">
    import CodeSnippetCard from "../../CodeSnippetCard.svelte";
</script>

<div class="flex justify-center w-full">
    <div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6">Add Solution</h3>
        <div class="card p-4 w-full text-token space-y-4">
            <label class="label">
                <span>Question</span>
                <input type="text" class="input" placeholder="Enter Question">
            </label>
            <label class="label">
                <span>Link</span>
                <input type="text" class="input" placeholder="Enter Link">
            </label>
            <label class="label">
                <span>Code</span>
                <textarea class="textarea" rows="4" placeholder="Enter Code Here"></textarea>
            </label>
        </div>
        <div class="text-center py-6">
            <h2>My Solutions</h2>
        </div>
        <CodeSnippetCard />
    </div>
</div>