<script>
	import Polaroid from '$lib/scrapbook/Polaroid.svelte';
	import Sticker from '$lib/scrapbook/Sticker.svelte';
	import StickyNote from '$lib/scrapbook/StickyNote.svelte';
	import TicketStub from '$lib/scrapbook/TicketStub.svelte';
	import ShippingLabel from '$lib/scrapbook/ShippingLabel.svelte';
	import StoreBadges from '$lib/scrapbook/StoreBadges.svelte';
	import PencilToolbar from '$lib/scrapbook/PencilToolbar.svelte';
	import MenuCards from '$lib/scrapbook/MenuCards.svelte';
	import Title from '$lib/scrapbook/Title.svelte';
	import DrawCanvas from '$lib/scrapbook/DrawCanvas.svelte';

	const INKS = [
		{ name: 'black', value: '#151515' },
		{ name: 'orange', value: '#EA5514' },
		{ name: 'blue', value: '#1F3A93' }
	];
	const HI = {
		d: 'M10 60C20 20 60 20 55 50C50 75 20 60 35 40C50 20 90 30 85 55M110 30V70M110 52C118 40 132 40 132 70M150 45V70M150 32L151 34',
		color: '#1F3A93',
		cx: 990,
		cy: 75,
		w: 180,
		h: 90
	};

	// x/y: centre in desktop design px (1512×982). mx/my/ms: mobile layout (390×844) — omit to hide on mobile.
	// TODO(copy): `back` text is placeholder — swap for the real date/place of each photo.
	const polaroids = [
		{
			src: 'radio',
			caption: "nonna's radio wall",
			back: "aug '98\nnonna's kitchen",
			x: 218.7,
			y: 231,
			r: -7,
			tape: { variant: 2, x: 185, y: -10, rotate: 15 },
			m: [100, 545, 0.55]
		},
		{
			src: 'mixtape',
			caption: "mixtape, summer '09",
			back: "july '09\nthe long drive",
			x: 1250.2,
			y: 287.3,
			r: 6,
			tape: { variant: 3, x: 156, y: -0, rotate: 31 },
			m: [290, 560, 0.55]
		},
		{
			src: 'film',
			caption: 'first film roll',
			back: "spring '03\nroll no. 1",
			x: 212.7,
			y: 795.5,
			r: 5,
			tape: { variant: 4, x: 127, y: -1, rotate: 4 }
		},
		{
			src: 'fog',
			caption: 'fog ride home',
			back: "nov '12\nlast bus, no bus",
			x: 1308.6,
			y: 713.2,
			r: -6,
			tape: { variant: 1, x: 87, y: 1.6, rotate: 50 }
		},
		{
			src: 'cefalu',
			caption: 'cefalù, 6pm',
			back: "june '16\ncefalù, sicily",
			x: 1496.9,
			y: 444,
			r: -10,
			tape: { variant: 2, x: 69, y: -5, rotate: -36 }
		}
	];

	let ink = $state('#1F3A93');
	/** @type {DrawCanvas} */
	let canvas;

	/** @type {(x: number, y: number, m?: number[]) => string} */
	const pos = (x, y, m) =>
		`--x:${x};--y:${y}` + (m ? `;--mx:${m[0]};--my:${m[1]};--ms:${m[2] ?? 1}` : '');
</script>

<svelte:head>
	<link
		rel="preload"
		href="/Pilowlava-Regular.woff"
		as="font"
		type="font/woff"
		crossorigin="anonymous"
	/>
</svelte:head>

<main class="stage">
	<DrawCanvas bind:this={canvas} {ink} seed={HI} />

	{#each polaroids as p (p.src)}
		<div class="piece" class:desktop-only={!p.m} style={pos(p.x, p.y, p.m)}>
			<Polaroid
				src="/scrapbook/photo-{p.src}.jpg"
				caption={p.caption}
				back={p.back}
				rotate={p.r}
				tape={p.tape}
			/>
		</div>
	{/each}

	<p class="piece tagline" style={pos(751.5, 64, [195, 104, 0.85])}>
		// a box for the moments you'll miss
	</p>

	<div class="piece desktop-only" style="{pos(782.6, 217)};--r:3deg"><TicketStub /></div>
	<div class="piece" style="{pos(1141.7, 136.1, [330, 196, 0.6])};--r:-12deg">
		<Sticker>EST.<br />2024</Sticker>
	</div>

	<img
		class="piece doodle"
		src="/scrapbook/star-1.svg"
		alt=""
		width="40"
		height="40"
		style="{pos(576.2, 163.2, [52, 200, 0.7])};--r:10deg"
	/>
	<img
		class="piece doodle desktop-only"
		src="/scrapbook/star-2.svg"
		alt=""
		width="40"
		height="40"
		style="{pos(724.2, 654.6)};--r:-14deg"
	/>
	<img
		class="piece doodle desktop-only"
		src="/scrapbook/star-3.svg"
		alt=""
		width="40"
		height="40"
		style="{pos(362, 577.8)};--r:-6deg"
	/>
	<img
		class="piece doodle"
		src="/scrapbook/heart.svg"
		alt=""
		width="60"
		height="56"
		style="{pos(353.5, 803.6, [352, 452, 0.6])};--r:12deg"
	/>

	<div class="piece title" style={pos(764, 414, [195, 300, 0.5])}><Title /></div>
	<img
		class="piece doodle"
		src="/scrapbook/squiggle-underline.svg"
		alt=""
		width="640"
		height="24"
		style={pos(757, 523, [195, 372, 0.5])}
	/>
	<img
		class="piece doodle desktop-only"
		src="/scrapbook/arrow-to-g.svg"
		alt=""
		width="120"
		height="90"
		style={pos(853, 573)}
	/>
	<p class="piece hint desktop-only" style="{pos(1039.8, 635.7)};--r:2deg">
		hover a letter → it swaps typeface. the title collects them, like the box collects moments.
	</p>

	<div class="piece" style="{pos(543.1, 807.9, [118, 726, 0.6])};--r:4deg"><StickyNote /></div>
	<div class="piece desktop-only" style="{pos(973.4, 804.6)};--r:-2deg"><ShippingLabel /></div>
	<p class="piece stamp desktop-only" style="{pos(1063.7, 909.4)};--r:7deg">FRAGILE: MEMORIES</p>

	<div class="piece badges" style={pos(134, 580, [292, 712, 0.72])}><StoreBadges /></div>

	<div class="piece tools" style="{pos(1393.2, 57.3, [296, 44, 0.85])};--r:-2deg">
		<PencilToolbar
			inks={INKS}
			bind:ink
			onundo={() => canvas.undo()}
			onclear={() => canvas.clear()}
		/>
	</div>
	<div class="piece menu" style={pos(228, 233, [158, 162, 0.72])}><MenuCards /></div>

	<footer class="piece footer" style={pos(1358.5, 954.5, [195, 822])}>
		© aberash 2026 · <a href="/privacy-policy">privacy</a> · <a href="/terms">t&amp;c's</a>
	</footer>
</main>

<style>
	.stage {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100dvh;
		overflow: hidden;
		background: var(--paper);
		color: var(--ink);
		cursor:
			url('/scrapbook/cursor-pencil.svg') 6 30,
			crosshair;
		touch-action: none;
		-webkit-user-select: none;
		user-select: none;
	}
	.stage :global(a),
	.stage :global(button) {
		cursor: pointer;
	}
	.stage :global(.polaroid button) {
		cursor: grab;
	}
	p.piece {
		margin: 0;
	}
	.doodle {
		pointer-events: none;
	}
	.tagline {
		white-space: nowrap;
		font:
			14px/normal 'Courier Prime',
			monospace;
		color: rgba(21, 21, 21, 0.65);
	}
	.hint {
		width: 270px;
		font:
			26px/1.05 'Caveat',
			cursive;
	}
	.stamp {
		padding: 6px 10px;
		border: 2.5px solid var(--red);
		color: var(--red);
		white-space: nowrap;
		font:
			13px/normal 'Rubik Mono One',
			sans-serif;
	}
	.title {
		z-index: 3;
	}
	.badges,
	.tools {
		z-index: 40;
	}
	.menu {
		z-index: 50;
		pointer-events: none; /* only the tab and cards are hit targets */
	}
	.footer {
		white-space: nowrap;
		font:
			12px/normal 'Courier Prime',
			monospace;
		color: rgba(21, 21, 21, 0.55);
		z-index: 40;
	}
	.footer a {
		color: inherit;
		text-decoration: none;
		margin: 0 1.5ch;
	}
	.footer a:hover,
	.footer a:focus-visible {
		text-decoration: underline;
	}
</style>
