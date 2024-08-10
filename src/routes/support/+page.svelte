<div class="container">
	<article class="article-main">
		<h1>Need some help?</h1>

		<p>Reach out to us, someone on our team will get in touch soon.</p>
		<p>support at aberash.xyz</p>

		<form class="support-form" action="mailto:support@aberash.xyz" method="GET">
			<input class="support-form__input" name="subject" type="text" placeholder="Subject Line" />
			<textarea
				class="support-form__textarea"
				name="body"
				placeholder="What can we help you with?"
			/>
			<input class="support-form__button" type="submit" value="Send" />
		</form>
	</article>
</div>

<style>
	.container {
		padding-top: 10.4rem;
		width: 100%;
		height: auto;
	}
	.article-main {
		padding: 2.4rem 3.6rem;
		width: 100%;
		max-width: 80rem;
		margin: auto;
	}
	h1 {
		font-size: 4.2rem;
	}

	p,
	li {
		font-size: 1.8rem;
	}

	.support-form {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.support-form__input {
		padding: 0.8rem 1.2rem;
	}
	.support-form__textarea {
		padding: 1.6rem 1.2rem;
	}
	.support-form__button {
		padding: 0.6rem 0.8rem;
		cursor: pointer;
	}

	@media (max-width: 500px) {
		.container {
			padding-top: 12.4rem;
		}
	}
</style>
