<script lang="ts">
    import { fetchData } from '$lib/store'
    
    export let data
    fetchData.set(data?.records)
</script>

<slot />