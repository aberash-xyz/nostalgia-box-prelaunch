<script>
	import { tick } from 'svelte';
	import { page } from '$app/state';
	import Tape from './Tape.svelte';
	import { APP_STORE_URL } from '$lib';

	const cards = [
		{ n: '01', label: 'home', href: '/', bg: '#fff', r: 2 },
		{ n: '02', label: 'the why', href: '/why', bg: 'var(--sticky)', r: -1.5 },
		{ n: '03', label: 'the app', href: APP_STORE_URL, bg: 'var(--light-blue)', r: 1 },
		{ n: '04', label: 'say hi', href: '/support', bg: 'var(--pink)', r: 1.5 }
	];

	let open = $state(false);
	/** @type {HTMLButtonElement} */
	let tab;
	/** @type {HTMLUListElement | undefined} */
	let list = $state();

	async function toggle() {
		open = !open;
		if (open) {
			await tick();
			list?.querySelector('a')?.focus();
		}
	}

	/** @param {KeyboardEvent} e */
	function onkeydown(e) {
		if (open && e.key === 'Escape') {
			open = false;
			tab.focus();
		}
	}
</script>

<svelte:window {onkeydown} />

<div class="menu" data-nodraw>
	<button
		bind:this={tab}
		class="tab"
		aria-expanded={open}
		aria-controls="menu-cards"
		aria-label="menu"
		onclick={toggle}
	>
		<img src="/scrapbook/scribble-lines.svg" alt="" width="42" height="30" />
		<Tape variant={3} width={84} height={28} x={41} y={-2} rotate={-12} />
	</button>
	<span class="word" aria-hidden="true">menu</span>

	<nav id="menu-cards" aria-label="site" hidden={!open}>
		{#if open}
			<ul bind:this={list}>
				{#each cards as c, i (c.n)}
					<li style:--i={i} style:rotate="{c.r}deg">
						<a
							href={c.href}
							style:background={c.bg}
							aria-current={page.url.pathname === c.href ? 'page' : undefined}
							onclick={() => (open = false)}
						>
							<span class="n">{c.n}</span>{c.label}
						</a>
					</li>
				{/each}
			</ul>
			<p class="hint">(click the tab again to tuck it away)</p>
		{/if}
	</nav>
</div>

<style>
	.menu {
		position: relative;
		width: 384px;
		height: 394px;
		pointer-events: none;
	}
	.menu > * {
		pointer-events: auto;
	}
	.tab {
		position: absolute;
		left: 2px;
		top: 2px;
		width: 76px;
		height: 64px;
		display: grid;
		place-items: center;
		padding: 0;
		border: 0;
		background: #fff;
		box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.18);
		rotate: 3deg;
		cursor: pointer;
	}
	.tab:focus-visible,
	a:focus-visible {
		outline: 2px solid var(--blue);
		outline-offset: 3px;
	}
	.word {
		position: absolute;
		left: 92px;
		top: 18px;
		rotate: 4deg;
		font:
			26px/normal 'Caveat',
			cursive;
		color: rgba(21, 21, 21, 0.55);
	}
	ul {
		position: absolute;
		left: 8px;
		top: 80px;
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	li {
		animation: deal 0.28s calc(var(--i) * 0.05s) both cubic-bezier(0.2, 0.8, 0.3, 1.2);
	}
	a {
		display: flex;
		align-items: baseline;
		gap: 14px;
		width: 300px;
		padding: 14px 18px;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
		color: var(--ink);
		text-decoration: none;
		font:
			24px/normal 'Special Elite',
			monospace;
		cursor: pointer;
		transition: translate 0.15s;
	}
	a:hover {
		translate: 6px 0;
	}
	a[aria-current='page'] {
		text-decoration: underline wavy var(--orange) 2px;
		text-underline-offset: 6px;
	}
	.n {
		font:
			14px 'Courier Prime',
			monospace;
		color: rgba(21, 21, 21, 0.6);
	}
	.hint {
		position: absolute;
		left: 115px;
		top: 356px;
		margin: 0;
		rotate: 2deg;
		white-space: nowrap;
		font:
			22px/normal 'Caveat',
			cursive;
		color: rgba(21, 21, 21, 0.6);
	}
	@keyframes deal {
		from {
			opacity: 0;
			translate: -14px -24px;
		}
	}
	@media (max-width: 719.98px) {
		.hint {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		li {
			animation: none;
		}
		a {
			transition: none;
		}
	}
</style>
