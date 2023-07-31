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
	<h3 class="title"> Join our email list </h3>
	<input type="text" placeholder="Full Name" name="name" required
		pattern="[A-Za-z ]+"/>
	<input type="email" placeholder="Email" name="email" required>
	<button disabled={loading || success} type="submit"> {loading ? "Submitting..." : "Receive updates!"} </button>
	<p class={success ? "visible": "hidden"}> Form submitted successfuly!</p>
</form>

<style type="text/css">
	form {
		margin: auto;
		width: 75%;
		max-width: 260px;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: "Noto Sans";
		background: transparent;
	}

	input {
		padding: 8px 2px;
		width: 100%;
		border: none;
		border-bottom: 1px rgba(0,0,0,0.2) solid;
		margin: 8px 0;
		font-family: "Noto Sans";
		background: transparent;
		-webkit-border-radius: 0;
		-webkit-appearance:none;
	}

	button {
		border: none;
		background: black;
		color: white;
		padding: 17px 56px;
		font-size: 14px;
		font-family: "Noto Sans";
		margin-top: 22px;
		width: 100%;
		border-radius: 0;
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
</style>