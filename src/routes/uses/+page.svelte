<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
    if ( browser ) {
        goto('/blog/uses');
    }
</script>

<svelte:head>
	<title>/uses</title>
</svelte:head>
