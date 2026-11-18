<div class="ticket">
	<p class="admit">ADMIT ONE</p>
	<p class="to">to the good old days</p>
	<img class="perf" src="/scrapbook/ticket-line.svg" alt="" />
	<p class="no">No.<br />0127</p>
</div>

<style>
	.ticket {
		position: relative;
		width: 270px;
		height: 84px;
		background: var(--pink);
		box-shadow: var(--paper-shadow);
		color: var(--ink);
	}
	p {
		position: absolute;
		margin: 0;
		white-space: nowrap;
		line-height: normal;
	}
	.admit {
		left: 18px;
		top: 14px;
		font:
			14px 'Rubik Mono One',
			sans-serif;
	}
	.to {
		left: 18px;
		top: 38px;
		font:
			italic 22px 'Instrument Serif',
			serif;
	}
	.perf {
		position: absolute;
		left: 214px;
		top: 0;
		width: 84px;
		height: 1px;
		rotate: 90deg;
		transform-origin: 0 0;
		translate: 1px 0;
	}
	.no {
		left: 224px;
		top: 24px;
		font:
			11px 'Courier Prime',
			monospace;
		color: rgba(21, 21, 21, 0.7);
	}
</style>
