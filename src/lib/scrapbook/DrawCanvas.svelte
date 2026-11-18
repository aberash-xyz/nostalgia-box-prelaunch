<script module>
	/** Smoothed path through points: quadratic curves via segment midpoints. */
	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number[][]} pts
	 */
	export function trace(ctx, pts) {
		ctx.beginPath();
		ctx.moveTo(pts[0][0], pts[0][1]);
		for (let i = 1; i < pts.length - 1; i++) {
			const [x, y] = pts[i];
			ctx.quadraticCurveTo(x, y, (x + pts[i + 1][0]) / 2, (y + pts[i + 1][1]) / 2);
		}
		const last = pts[pts.length - 1];
		ctx.lineTo(last[0], last[1]);
	}
</script>

<script>
	import { onMount } from 'svelte';

	/**
	 * Full-viewport doodle layer behind the page. Strokes live in sessionStorage only — nothing is uploaded.
	 * `seed` is an SVG path in desktop design px (the "hi" doodle from Figma 7465:170) drawn as the first stroke.
	 */
	/** @typedef {{ color: string, pts: number[][], seed?: undefined } | { color: string, seed: true, pts?: undefined }} Stroke */
	/** @type {{ ink: string, seed?: { d: string, color: string, cx: number, cy: number, w: number, h: number } | null }} */
	let { ink, seed = null } = $props();

	const KEY = 'nb-doodles';
	/** @type {HTMLCanvasElement} */
	let canvas;
	/** @type {CanvasRenderingContext2D} */
	let ctx;
	let dpr = 1;
	/** @type {Stroke[]} */
	let strokes = [];
	/** @type {{ color: string, pts: number[][] } | null} */
	let cur = null;
	let frame = 0;

	export function undo() {
		strokes.pop();
		commit();
	}

	export function clear() {
		strokes = [];
		commit();
	}

	function commit() {
		try {
			sessionStorage.setItem(KEY, JSON.stringify(strokes));
		} catch {
			// storage blocked (private mode): strokes stay in memory
		}
		redraw();
	}

	/** @param {Stroke} st */
	function draw(st) {
		ctx.strokeStyle = ctx.fillStyle = st.color;
		if (st.seed) {
			// ponytail: seed only shows on the desktop layout, where its Figma position exists.
			const w = innerWidth;
			const h = innerHeight;
			if (w < 720 || !seed) return;
			const s = Math.min(w / 1512, h / 982);
			const x = (seed.cx / 1512) * w - (seed.w / 2) * s;
			const y = (seed.cy / 982) * h - (seed.h / 2) * s;
			ctx.save();
			ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * x, dpr * y);
			ctx.stroke(new Path2D(seed.d));
			ctx.restore();
		} else if (st.pts.length === 1) {
			ctx.beginPath();
			ctx.arc(st.pts[0][0], st.pts[0][1], 1.6, 0, Math.PI * 2);
			ctx.fill();
		} else {
			trace(ctx, st.pts);
			ctx.stroke();
		}
	}

	// ponytail: full redraw per frame, O(total points). Cache finished strokes in an offscreen canvas if doodles get huge.
	function redraw() {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, innerWidth, innerHeight);
			ctx.lineWidth = 3;
			ctx.lineCap = ctx.lineJoin = 'round';
			for (const st of strokes) draw(st);
			if (cur) draw(cur);
		});
	}

	function resize() {
		dpr = devicePixelRatio || 1;
		canvas.width = Math.round(innerWidth * dpr);
		canvas.height = Math.round(innerHeight * dpr);
		redraw();
	}

	/** @param {PointerEvent} e */
	function down(e) {
		if (
			e.button !== 0 ||
			/** @type {Element} */ (e.target).closest('a, button, input, textarea, select, [data-nodraw]')
		)
			return;
		e.preventDefault();
		cur = { color: ink, pts: [[e.clientX, e.clientY]] };
		redraw();
	}

	/** @param {PointerEvent} e */
	function move(e) {
		if (!cur) return;
		for (const p of e.getCoalescedEvents?.() ?? [e]) cur.pts.push([p.clientX, p.clientY]);
		redraw();
	}

	function up() {
		if (!cur) return;
		strokes.push(cur);
		cur = null;
		commit();
	}

	onMount(() => {
		ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));
		try {
			strokes =
				JSON.parse(sessionStorage.getItem(KEY) ?? 'null') ??
				(seed ? [{ seed: true, color: seed.color }] : []);
		} catch {
			strokes = seed ? [{ seed: true, color: seed.color }] : [];
		}
		resize();
	});
</script>

<svelte:window
	onresize={resize}
	onpointerdown={down}
	onpointermove={move}
	onpointerup={up}
	onpointercancel={up}
/>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
	canvas {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}
</style>
