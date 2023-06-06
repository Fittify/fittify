<script lang="ts">
	import Header from "$lib/Header.svelte";
	import SignupForm from "./SignupForm.svelte";
	import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
	import NewHeader from "$lib/NewHeader.svelte";
</script>

<NewHeader/>


<div class="Signup">
	<div class="SignupImage" id="LoginImage">
		<img src="/sign_up.jpg">
	</div>

	<div class="SignupForm" id="LoginForm">
		<h1 class="title has-text-centered">Register</h1>
		<SignupForm />
	</div>
</div>