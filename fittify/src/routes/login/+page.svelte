<script lang="ts">
	import { goto } from "$app/navigation";
	import Header from "$lib/Header.svelte";
	import { accountService } from "../../services/account-service";
	import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
	import NewHeader from "$lib/NewHeader.svelte";
	import LoginForm from "./LoginForm.svelte";
	let email = "";
	let password = "";
	let errorMessage = "";

	async function login() {
		console.log(`attemting to log in email: ${email} with password: ${password}`);
		let success = await accountService.login(email, password);
		if (success) {
			goto("/report");
		} else {
			email = "";
			password = "";
			errorMessage = "Invalid Credentials";
		}
	}
</script>


<NewHeader/>



<div class="Login">

	<div class="LoginImage" id="LoginImage">
		<img src="/log_in.jpg">
	</div>

	<div class="LoginForm" id="LoginForm">
		<h1 class="title has-text-centered">Login</h1>
		<LoginForm />
	</div>

</div>