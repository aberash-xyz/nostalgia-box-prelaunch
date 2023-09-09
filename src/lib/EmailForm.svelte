<script type="module">
	import { enhance } from '$app/forms';
	let success = false;
	let loading = false;
</script>

<form method="POST" use:enhance={(cancel) => {
	loading = true
	return async ({ result, update}) => {
		if (result.type == "success") {
			success = true
		}
		loading = false
	}
}}>
	<!-- <h3 class="title"> Join our email list </h3> -->
	<input type="text" placeholder="// Name" name="name" required
		pattern="[A-Za-z ]+"/>
	<input type="email" placeholder="// Email" name="email" required>
	<button disabled={loading || success} type="submit"> {loading ? "Submitting..." : " Receive updates! "} </button>
	<p class={success ? "visible": "hidden"}> Form submitted successfuly!</p>
</form>

<style type="text/css">
	form {
		margin: auto;
		width: 250px;
		height: auto;
		font-family: "Noto Sans";
		background: transparent;
	}

	input {
		padding: 4px 2px;
		width: 100%;
		border: none;
		margin: 4px 0;
		font-family: "Noto Sans";
		background: transparent;
		-webkit-border-radius: 0;
		-webkit-appearance:none;
		outline: none;
	}

	button {
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
		text-align: left;
	}
	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	p {
		font-size: 12px;
		margin-top: 12px;
		color: rgba(0, 0, 0, 0.6);
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
		.input, button, form {
			text-align: center;
		}
	}
</style>