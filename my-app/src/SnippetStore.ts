import { writable, get } from "svelte/store";

export const snippetStore = writable<CodeSnippet[]>([]);

// add snipper
export function addSnippet(input: CodeSnippetInput) {
  let snippets = get(snippetStore);
  snippetStore.update(() => {
    return [{ ...input, favorite: false }, ...snippets];
  });
}

// delete
export function deleteSnippet(index: number) {
  let snippets = get(snippetStore);
  snippets.splice(index, 1); // removes 1 item from index 'index'
  snippetStore.update(() => {
    return snippets;
  });
}

// toggle favorite
export function toggleFavorite(index: number) {
  let snippets = get(snippetStore);
 
  snippetStore.update(() => {
    return snippets.map((snippet, snippetIndex) => {
        if (snippetIndex === index) {
            return { ...snippet, favorite: !snippet.favorite }
        }
        return snippet
    })
  });
}
