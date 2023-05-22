<script lang="ts">
	import Header from "$lib/Header.svelte";
	import SignupForm from "./SignupForm.svelte";
	import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
</script>

<Header>
	<WelcomeNavigator />
</Header>

<div class="columns">
	<div class="column is-half">
		<div class="box">Image</div>
	</div>
	<div class="column is-half">
		<div class="box">
			<h1 class="title has-text-centered">Register</h1>
			<SignupForm />
		</div>
	</div>
	<div class="column has-text-centered">
	</div>
</div>
