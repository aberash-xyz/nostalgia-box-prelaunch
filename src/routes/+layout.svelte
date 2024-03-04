<script type="module">
	import Header from '$lib/Header.svelte';

	import '../global.css';
	import * as content from '../content.json';
</script>

<svelte:head>
	<title>NostalgiaBox</title>
	<meta name="description" content={content.description} />
</svelte:head>
<Header />
<slot />
