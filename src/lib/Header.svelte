<script>
	const openModal = () => {
		let modalBtn = document.querySelector('.open-modal-btn');
		if (modalBtn) {
			modalBtn.click();
		}
	};

	import EmailForm from '$lib/EmailForm.svelte';
</script>

<header class="my-header">
	<ul class="link-list">
		<li>
			<a class="link" href="/">
				<span class="link--text">Home</span>
				<span class="link--text">Home</span>
			</a>
		</li>
		<li>
			<a class="link" href="/why">
				<span class="link--text">The Why </span>
				<span class="link--text">The Why</span>
			</a>
		</li>
		<li>
			<a class="link" href="/terms">
				<span class="link--text">T&C's</span>
				<span class="link--text">T&C's</span>
			</a>
		</li>
		<li>
			<a class="link" href="/privacy-policy">
				<span class="link--text">Privacy Policy</span>
				<span class="link--text">Privacy Policy</span>
			</a>
		</li>
		<li>
			<a class="link" on:click={openModal}>
				<span class="link--text accent">Waitlist</span>
				<span class="link--text accent">Waitlist</span>
			</a>
		</li>
	</ul>

	<EmailForm />
</header>

<style>
	li {
		text-align: center;
	}
	.my-header {
		position: absolute;
		z-index: 100000;
		padding: 2.4rem;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
	}
	.link-list {
		font-family: 'Ostrich Sans';
		display: flex;
		gap: 5rem;
		font-size: 2rem;
		flex: 1;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		margin: 0;
	}
	.link {
		display: block;
		height: 4rem;
		overflow: hidden;
		cursor: pointer;
		color: #000;
		text-decoration: none;
		min-width: 15rem;
		text-align: center;
	}
	.link--text {
		display: block;
		padding: 1.2rem 1.6rem;
		height: 100%;
		transition: ease-in 0.2s;
	}
	.link:hover > .link--text {
		transform: translateY(-100%);
	}
	.accent {
		color: var(--accent);
	}
	@media (max-width: 1200px) {
		.link-list {
			gap: 2rem;
			padding: 0;
		}
	}
	@media (max-width: 800px) {
		.my-header {
			padding-top: 4.2rem;
			overflow: hidden;
		}
		.link-list {
			font-size: 2.8rem;
			padding: 0;
			list-style: none;
			gap: 0.8rem;
			justify-content: space-around;
			flex-wrap: wrap;
		}
		.link {
			width: 16rem;
			min-width: 0;
			/*			border-right: solid 1px lightgray;*/
			/*			border-width: 0 1px 0 1px;*/
		}
	}
</style>
