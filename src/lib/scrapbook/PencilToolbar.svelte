<script>
	let { inks, ink = $bindable(), onundo, onclear } = $props();
</script>

<div class="toolbar" role="toolbar" aria-label="pencil" data-nodraw>
	{#each inks as c (c.value)}
		<button
			class="ink"
			class:on={ink === c.value}
			style:background={c.value}
			aria-label="{c.name} ink"
			aria-pressed={ink === c.value}
			onclick={() => (ink = c.value)}
		></button>
	{/each}
	<button class="word" onclick={onundo}>undo</button>
	<button class="word" onclick={onclear}>clear</button>
</div>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 14px 8px 12px;
		background: #fff;
		box-shadow: var(--paper-shadow);
	}
	button {
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
	}
	.ink {
		width: 18px;
		height: 18px;
		border-radius: 50%;
	}
	.ink.on {
		box-shadow: 0 0 0 3px #ffd23f;
	}
	.word {
		font:
			20px/normal 'Caveat',
			cursive;
		color: rgba(21, 21, 21, 0.7);
	}
	.word:hover {
		color: var(--ink);
	}
	button:focus-visible {
		outline: 2px solid var(--blue);
		outline-offset: 3px;
	}
</style>
