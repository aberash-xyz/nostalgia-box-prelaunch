<script>
	import Tape from './Tape.svelte';
</script>

<div class="note">
	<Tape variant={4} x={141} y={-6} rotate={-14} />
	<p class="head">this page is yours.</p>
	<!-- TODO(product): "we'll tuck it in the box" is aspirational — doodles are only kept for this tab session, nothing is uploaded. -->
	<p class="body">your cursor's a pencil — doodle anywhere. we'll tuck it in the box.</p>
	<img class="squiggle" src="/scrapbook/squiggle.svg" alt="" width="70" height="40" />
</div>

<style>
	.note {
		position: relative;
		width: 262px;
		height: 218px;
		padding: 16px 18px;
		background: var(--sticky);
		box-shadow: var(--paper-shadow);
		color: var(--ink);
	}
	p {
		margin: 0;
	}
	.head {
		font:
			700 32px/normal 'Caveat',
			cursive;
		white-space: nowrap;
	}
	.body {
		margin-top: 3px;
		width: 226px;
		font:
			22px/normal 'Caveat',
			cursive;
		color: rgba(21, 21, 21, 0.75);
	}
	.squiggle {
		position: absolute;
		left: 20px;
		top: 158px;
	}
</style>
