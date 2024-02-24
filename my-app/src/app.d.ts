// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface CodeSnippetInput {
	question: string
	link: string
	code: string
	favorite: boolean
}

interface CodeSnippet {
	question: string
	link: string
	code: string
	favorite: boolean
	id: string
}
