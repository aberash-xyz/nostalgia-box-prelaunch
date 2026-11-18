<script>
	import MenuCards from '$lib/scrapbook/MenuCards.svelte';
	import { page } from '$app/state';

	import '../global.css';
	import * as content from '../content.json';
</script>

<svelte:head>
	<title>NostalgiaBox</title>
	<meta name="description" content={content.description} />
	<!-- Share card (Open Graph / Twitter). Source: Figma "OG image — 1200×630" (7471:78). -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="NostalgiaBox" />
	<meta property="og:title" content="NostalgiaBox" />
	<meta property="og:description" content="a box for the moments you'll miss." />
	<meta property="og:url" content={page.url.origin + page.url.pathname} />
	<meta property="og:image" content={page.url.origin + '/og.png'} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="NostalgiaBox title in mixed typefaces surrounded by taped polaroids"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bagel+Fat+One&family=Bowlby+One&family=Caveat:wght@400;700&family=Courier+Prime&family=DM+Serif+Display&family=Homemade+Apple&family=Instrument+Serif:ital@1&family=Monoton&family=Permanent+Marker&family=Rubik+Mono+One&family=Special+Elite&family=ZCOOL+KuaiLe&display=swap"
	/>
</svelte:head>

<!-- The home page places its own menu inside the scrapbook layout. -->
{#if page.url.pathname !== '/'}
	<div class="nav"><MenuCards /></div>
{/if}
<slot />

<style>
	.nav {
		position: absolute;
		top: 20px;
		left: 20px;
		z-index: 50;
		scale: 0.85;
		transform-origin: 0 0;
		pointer-events: none;
	}
	@media (max-width: 500px) {
		.nav {
			top: 12px;
			left: 12px;
			scale: 0.7;
		}
		:global(body) {
			padding-top: 32px;
		}
	}
</style>
