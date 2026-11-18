<script>
	import Header from '$lib/Header.svelte';
	import { page } from '$app/state';

	import '../global.css';
	import * as content from '../content.json';
</script>

<svelte:head>
	<title>NostalgiaBox</title>
	<meta name="description" content={content.description} />
</svelte:head>
{#if page.url.pathname !== '/'}<Header />{/if}
<slot />
