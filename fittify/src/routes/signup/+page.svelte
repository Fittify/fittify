<script>
	import WelcomeNavigator from "../../lib/WelcomeNavigator.svelte";
	import SignupForm from "./SignupForm.svelte";
</script>

<WelcomeNavigator />

<section class="columns is-full is-vcentered is-centered background-sign-up-image scroll-blocked">
	<div class="column is-half hero is-fullheight" />
	<div class="column is-half hero is-fullheight">
		<div class="columns is-vcentered is-centered">
			<div class="column is-one-third hero is-fullheight" />
			<div class="column is-two-thirds is-fullheight pb-0 mb-0">
				<div class="container hero box is-fullheight">
					<div class="hero-body pb-0 mb-0">
						<div class="container">
							<h1 class="title is-size-3 has-text-centered">Register</h1>
							<SignupForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>