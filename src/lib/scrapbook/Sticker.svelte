<script>
	let { children } = $props();
</script>

<div class="sticker">{@render children()}</div>

<style>
	.sticker {
		display: grid;
		place-items: center;
		width: 104px;
		height: 104px;
		border-radius: 50%;
		background: var(--orange);
		box-shadow: var(--paper-shadow);
		color: var(--paper);
		font:
			16px/1.1 'Rubik Mono One',
			sans-serif;
		text-align: center;
	}
</style>
