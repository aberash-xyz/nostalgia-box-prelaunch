<script module>
	let topZ = 10;
</script>

<script>
	import Tape from './Tape.svelte';

	/** Polaroid (Figma 7457:50). Drag to move, click / Enter to flip. `tape` is offset from the centre, unrotated. */
	let { src, caption, rotate = 0, back = '', tape = null } = $props();

	let dx = $state(0);
	let dy = $state(0);
	let flipped = $state(false);
	/** @type {HTMLDivElement} */
	let root;
	/** @type {{ x: number, y: number, dx: number, dy: number, s: number } | null} */
	let drag = null;
	let moved = false;

	/** @param {PointerEvent & { currentTarget: HTMLElement }} e */
	function down(e) {
		if (e.button !== 0) return;
		const piece = /** @type {HTMLElement} */ (root.closest('.piece') ?? root);
		piece.style.zIndex = String(++topZ);
		drag = {
			x: e.clientX,
			y: e.clientY,
			dx,
			dy,
			s: parseFloat(getComputedStyle(piece).scale) || 1
		};
		moved = false;
		e.currentTarget.setPointerCapture(e.pointerId);
	}

	/** @param {PointerEvent} e */
	function move(e) {
		if (!drag) return;
		const mx = e.clientX - drag.x;
		const my = e.clientY - drag.y;
		if (!moved && Math.hypot(mx, my) < 5) return;
		moved = true;
		dx = drag.dx + mx / drag.s;
		dy = drag.dy + my / drag.s;
	}

	function click() {
		if (moved) moved = false;
		else flipped = !flipped;
	}
</script>

<div class="polaroid" bind:this={root} style:translate="{dx}px {dy}px">
	<button
		class="card"
		class:flipped
		style:--r="{rotate}deg"
		aria-label="{caption}. Flip photo"
		aria-pressed={flipped}
		data-nodraw
		onpointerdown={down}
		onpointermove={move}
		onpointerup={() => (drag = null)}
		onpointercancel={() => (drag = null)}
		onclick={click}
	>
		<span class="inner">
			<span class="face front">
				<img {src} alt="" draggable="false" width="206" height="206" />
				<span class="caption">{caption}</span>
			</span>
			<span class="face back">
				<span class="back-text">{back}</span>
			</span>
		</span>
	</button>
	{#if tape}<Tape {...tape} />{/if}
</div>

<style>
	.polaroid {
		position: relative;
		width: 230px;
		height: 272px;
	}
	.card {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		rotate: var(--r);
		perspective: 900px;
		cursor: grab;
		touch-action: none;
		transition:
			rotate 0.25s,
			scale 0.25s;
	}
	.card:active {
		cursor: grabbing;
	}
	.card:hover {
		rotate: calc(var(--r) + 3deg);
		scale: 1.03;
	}
	.card:focus-visible {
		outline: 2px solid var(--blue);
		outline-offset: 4px;
	}
	.inner {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}
	.flipped .inner {
		transform: rotateY(180deg);
	}
	.face {
		position: absolute;
		inset: 0;
		background: #fff;
		box-shadow: 2px 6px 7px rgba(0, 0, 0, 0.2);
		backface-visibility: hidden;
	}
	.front img {
		position: absolute;
		left: 12px;
		top: 12px;
		width: 206px;
		height: 206px;
		object-fit: cover;
		user-select: none;
	}
	.caption {
		position: absolute;
		left: 12px;
		top: 222px;
		width: 206px;
		text-align: center;
		font:
			26px/normal 'Caveat',
			cursive;
		color: var(--ink);
		white-space: nowrap;
	}
	.back {
		display: grid;
		place-items: center;
		padding: 24px;
		background: #faf6ee;
		transform: rotateY(180deg);
	}
	.back-text {
		font:
			24px/1.2 'Caveat',
			cursive;
		color: var(--blue);
		text-align: center;
		white-space: pre-line;
	}
	@media (prefers-reduced-motion: reduce) {
		.card,
		.inner {
			transition: none;
		}
		.card:hover {
			rotate: var(--r);
			scale: 1;
		}
	}
</style>
