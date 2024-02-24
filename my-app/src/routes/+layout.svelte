<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github-dark.css'

	storeHighlightJs.set(hljs)

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex gap-4 text-xl">
					<a href="/">home</a>
					<a href="/topics">topics</a>
				</div>			
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
