<script type="module">
	import { enhance } from '$app/forms';
	import { onMount } from "svelte"
	let success = false;
	let loading = false;
	let isSmall = true;
	let dialog;

	// onMount(_ => {
	// 	if (document.body.clientWidth < 800) {
	// 		isSmall = true;
	// 		return
	// 	}
	// 	isSmall = false;
	// })

	const showDialog = () => {
		if (!dialog) findModal();
		dialog.showModal()
	}
	const closeDialog = () => {
		if (!dialog) findModal();
		dialog.close()
	}
	const findModal = () => {
		dialog = document.querySelector('.modal');
	}
</script>

	<!-- <h3 class="title"> Join our email list </h3> -->
	{#if isSmall}
	<div class="modal-container">
		<dialog class="modal">
			<form method="POST" use:enhance={(cancel) => {
				loading = true
				return async ({ result, update}) => {
					if (result.type == "success") {
						success = true
					}
					loading = false
				}
			}}>
			<input type="text" placeholder="// Name" name="name" required
				pattern="[A-Za-z ]+"/>
			<input type="email" placeholder="// Email" name="email" required>
			<button class="submit-button" disabled={loading || success} type="submit"> {loading ? "Submitting..." : " Submit! "} </button>
			<p class={success ? "visible": "hidden"}> Form submitted successfuly!</p>
			<button on:click={closeDialog} type="button" class="close-button">-- Close --</button>
			</form>
		</dialog>
		<button class="open-modal-btn" on:click={showDialog}>Receive Updates!</button>
	</div>

	{:else}
	<form method="POST" use:enhance={(cancel) => {
		loading = true
		return async ({ result, update}) => {
			if (result.type == "success") {
				success = true
			}
			loading = false
		}
	}}>
		<input type="text" placeholder="// Name" name="name" required
			pattern="[A-Za-z ]+"/>
		<input type="email" placeholder="// Email" name="email" required>
		<button class="submit-button" disabled={loading || success} type="submit"> {loading ? "Submitting..." : " Receive Updates! "} </button>
		<p class={success ? "visible": "hidden"}> Form submitted successfuly!</p>
	</form>
	{/if}

<style type="text/css">
	form {
		margin: auto;
		width: 250px;
		height: auto;
		font-family: "Noto Sans";
		background: transparent;
	}

	input {
		padding: 2.4rem 0rem;
		width: 100%;
		border: none;
		margin: 4px 0;
		font-family: "Noto Sans";
		background: transparent;
		-webkit-border-radius: 0;
		-webkit-appearance:none;
		outline: none;
	}

	.submit-button {
		border: none;
		background: none;
		color: black;
		padding: 14px 4px;
		font-size: 14px;
		font-family: "Noto Sans";
		font-weight: 600;
		width: 100%;
		border-radius: 0;
		text-decoration: underline;
		cursor: pointer;
		margin-top: 2.4rem;
		text-align: center;
	}
	.submit-button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	p {
		font-size: 12px;
		margin-top: 12px;
		color: rgba(0, 0, 0, 0.6);
	}

	.close-button {
		position: absolute;
		top: 5%;
		right: 5%;
		border: none;
		background: none;
		color: black;
		font-size: 14px;
		font-family: "Noto Sans";
		cursor: pointer;
	}

	.open-modal-btn {
		background: none;
		border: none;
		color: black;
		text-decoration: underline;
		font-weight: 600;
		font-family: "Noto Sans";
		line-height: 3.2rem;
		opacity: 0;
		visibility: hidden;
	}
	.modal {
		padding: 3.2rem 1.6rem 1.6rem 1.6rem;
		border: none;
		width: 80%;
		max-width: 340px;
		border-radius: 2.6rem;
		background-color: rgba(255,255,255,0.4);
		backdrop-filter: blur(30px);
	}
	.hidden {
		visibility: hidden;
	}
	.visible {
		visibility: visible;
	}
	.title {
		font-weight: 600;
		text-transform: capitalize;
	}

	@media(max-width: 800px) {
		input {
			margin-bottom: 1.2rem;
			font-size: 16px;
		}
		.submit-button {
			width: 100%;
		}
	}
</style>