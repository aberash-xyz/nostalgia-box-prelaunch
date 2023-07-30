<script>
	export let text;
</script>

<h3 class="vertical-text">
	{text}
</h3>

<style>
	.vertical-text {
		transform-origin: center;
		background: white;
		max-width: 12rem;
		text-orientation: mixed;
		writing-mode: vertical-rl;
		transform: translateX(-19px);
		font-family: "Noto Sans";
		font-weight: 600;
	}
</style>