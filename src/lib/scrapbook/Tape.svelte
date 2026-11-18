<script>
	/** Tape strip (Figma 7464:71). `x`/`y` place its centre inside a positioned parent. */
	let { variant = 1, width = 96, height = 30, rotate = 0, x = null, y = null } = $props();
</script>

<img
	class="tape"
	src="/scrapbook/tape-{variant}.png"
	alt=""
	draggable="false"
	style:width="{width}px"
	style:height="{height}px"
	style:rotate="{rotate}deg"
	style:left={x === null ? null : `${x}px`}
	style:top={y === null ? null : `${y}px`}
	style:position={x === null ? null : 'absolute'}
	style:translate={x === null ? null : '-50% -50%'}
/>

<style>
	.tape {
		display: block;
		object-fit: cover;
		opacity: 0.82;
		pointer-events: none;
		user-select: none;
		z-index: 2;
	}
</style>
