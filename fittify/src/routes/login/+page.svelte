<script>
	import '../../app.css';
	import WelcomeNavigator from "../../lib/WelcomeNavigator.svelte";
	import LoginForm from "./LoginForm.svelte";
</script>

<WelcomeNavigator />

<section class="columns is-full is-vcentered is-centered background-log-in-image">
	<div class="column is-half hero is-fullheight" />
	<div class="column is-half hero is-fullheight">
		<div class="columns is-vcentered is-centered">
			<div class="column is-one-third hero is-fullheight" />
			<div class="column is-two-thirds is-fullheight">
				<div class="container hero box is-fullheight">
					<div class="hero-body">
						<div class="container">
							<h1 class="title is-size-2 has-text-centered">Login</h1>
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>