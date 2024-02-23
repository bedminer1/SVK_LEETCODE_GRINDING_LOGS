<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";

    let items = [
        {
            name: "linked-list",
            desc: "hi"

        }
    ]
  </script>
   
   <div class="h-full w-full flex flex-col justify-center items-center text-zinc-200">
    <h1 class="text-5xl">Hello</h1>
    <Accordion.Root class=" flex flex-col justify-center items-center w-full">
        {#each items as item}
        <Accordion.Item value="item-1" class="w-1/5">
        <Accordion.Trigger>{item.name}</Accordion.Trigger>
        <Accordion.Content>
            {item.desc}
        </Accordion.Content>
        </Accordion.Item>
        {/each}
    </Accordion.Root>
   </div>

