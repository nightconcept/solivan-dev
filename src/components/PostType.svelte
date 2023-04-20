<script lang="ts">
	export let type: string;
</script>

{#if type == 'blog'}
	<span class="rounded bg-gray-600 p-1 text-sm font-light uppercase text-gray-200">{type}</span>
{:else if type == 'essay'}
	<span class="font-light text-sm rounded bg-gray-600 p-1 uppercase text-gray-200">{type}</span>
{:else if type == 'tutorial'}
	<span class="font-light text-sm rounded bg-gray-600 p-1 uppercase text-gray-200">{type}</span>
{:else if type == 'essay'}
	<span class="font-light text-sm rounded bg-gray-600 p-1 uppercase text-gray-200">{type}</span>
{/if}
