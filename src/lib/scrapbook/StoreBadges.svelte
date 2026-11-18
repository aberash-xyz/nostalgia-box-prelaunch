<script>
	import Tape from './Tape.svelte';

	const APP_STORE_URL = 'https://apps.apple.com/us/app/nostalgiabox/id6449536114';
	const PLAY_STORE_URL = ''; // TODO: Google Play listing URL once the Android app is live.
</script>

<div class="badges">
	<a class="badge apple" href={APP_STORE_URL}>
		<img
			src="/Download_on_the_App_Store.svg"
			alt="Download on the App Store"
			width="160"
			height="53"
		/>
	</a>
	<svelte:element
		this={PLAY_STORE_URL ? 'a' : 'span'}
		class="badge play"
		href={PLAY_STORE_URL || undefined}
		title={PLAY_STORE_URL ? undefined : 'coming soon'}
	>
		<img src="/Download_on_Google_Play.png" alt="Get it on Google Play" width="186" height="56" />
	</svelte:element>
	<Tape variant={1} width={64} height={22} x={98} y={13} rotate={-8} />
</div>

<style>
	.badges {
		position: relative;
		width: 220px;
		height: 150px;
	}
	.badge {
		position: absolute;
		display: block;
		cursor: pointer;
		transition: scale 0.2s;
	}
	.badge img {
		display: block;
		height: auto;
		filter: drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.18));
	}
	.apple {
		left: 4px;
		top: 16px;
		rotate: 6deg;
	}
	.play {
		left: 14px;
		top: 70px;
		rotate: -4deg;
	}
	span.play {
		cursor: default;
	}
	a.badge:hover {
		scale: 1.05;
	}
	@media (prefers-reduced-motion: reduce) {
		.badge {
			transition: none;
		}
	}
</style>
