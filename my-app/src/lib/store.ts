import { writable } from "svelte/store";

export const fetchData = writable<CodeSnippet[] | null>(null)
