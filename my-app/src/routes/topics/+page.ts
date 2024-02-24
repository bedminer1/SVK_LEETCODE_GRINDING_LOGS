import type { PageLoad } from './$types'

export const load = (() => {
    return {
        snippets: [
            {
                question: "add numbers",
                link: "nil",
                code: `(a + b) => a + b`,
                favorite: false
            }
        ]
    }
}) satisfies PageLoad