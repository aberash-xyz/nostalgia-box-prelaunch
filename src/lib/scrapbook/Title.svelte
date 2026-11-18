<script module>
	// Font pool (Figma 7470:78). Sizes balance each face's x-height against the others.
	export const POOL = [
		{ family: 'ZCOOL KuaiLe', size: 124 },
		{ family: 'Instrument Serif', size: 150, style: 'italic' },
		{ family: 'Rubik Mono One', size: 92 },
		{ family: 'Permanent Marker', size: 128 },
		{ family: 'DM Serif Display', size: 150 },
		{ family: 'Special Elite', size: 124 },
		{ family: 'Bagel Fat One', size: 112 },
		{ family: 'Caveat', size: 150, weight: 700 },
		{ family: 'Archivo Black', size: 118 },
		{ family: 'Bowlby One', size: 116 },
		{ family: 'Homemade Apple', size: 84 },
		{ family: 'Monoton', size: 112 }
	];
	const BRAND = { family: 'Pillow Lava', size: 96 }; // Pilowlava runs wide; 96px ≈ the 922px Figma title width
	const COLORS = ['#151515', '#151515', '#151515', '#C8321E', '#EA5514', '#1F3A93', '#F2D25C'];
	// "Fully touched" state from Figma 7465:68 — shown with ?collage.
	/** @type {[number, string?][]} */
	const COLLAGE = [
		[0],
		[1],
		[2],
		[3, '#C8321E'],
		[4],
		[5],
		[6, '#EA5514'],
		[7, '#1F3A93'],
		[8],
		[9, '#F2D25C'],
		[10],
		[2]
	];

	/** Pick a pool index that differs from both neighbours' fonts (-1 = brand font). */
	/**
	 * @param {number | undefined} left
	 * @param {number | undefined} right
	 */
	export function pick(left, right, rand = Math.random) {
		const options = POOL.map((_, i) => i).filter((i) => i !== left && i !== right);
		return options[Math.floor(rand() * options.length)];
	}
</script>

<script>
	import { onMount } from 'svelte';

	const word = 'NostalgiaBox';
	let letters = $state([...word].map((ch) => ({ ch, fi: -1, color: '#151515' })));

	onMount(() => {
		if (new URLSearchParams(location.search).has('collage')) {
			letters = letters.map((l, i) => ({
				...l,
				fi: COLLAGE[i][0],
				color: COLLAGE[i][1] ?? '#151515'
			}));
		}
	});

	/** @param {number} i */
	function swap(i) {
		const l = letters[i];
		if (l.fi !== -1) return; // touched letters stay swapped
		l.fi = pick(letters[i - 1]?.fi, letters[i + 1]?.fi);
		l.color = COLORS[Math.floor(Math.random() * COLORS.length)];
	}
</script>

<h1 class="title" aria-label={word}>
	{#each letters as l, i (i)}
		{@const font = POOL[l.fi] ?? BRAND}
		{#if i === 9}<span class="br" aria-hidden="true"></span>{/if}
		<span
			class="letter"
			aria-hidden="true"
			style:font-family="'{font.family}'"
			style:font-size="{font.size}px"
			style:font-style={font.style ?? 'normal'}
			style:font-weight={font.weight ?? 400}
			style:color={l.color}
			onpointerenter={() => swap(i)}>{l.ch}</span
		>
	{/each}
</h1>

<style>
	.title {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: baseline;
		width: max-content;
		margin: 0;
		line-height: 1.2;
		font-weight: 400;
		user-select: none;
	}
	.letter {
		padding: 0 3px;
	}
	.br {
		display: none;
		flex-basis: 100%;
	}
	@media (max-width: 719.98px) {
		.br {
			display: block;
		}
	}
</style>
