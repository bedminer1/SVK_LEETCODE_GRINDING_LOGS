
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