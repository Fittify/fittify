<script lang="ts">
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";

	let firstName = "";
	let lastName = "";
	let email = "";
	let password = "";
    let repeatedPassword = "";
	let errorMessage = "";

	async function signup() {
		if (password !== repeatedPassword) {
			errorMessage = "Password and repeated password have to be the same!";
			return;
		}
		let success = await accountService.signup(firstName, lastName, email, password);
		if (success) {
			goto("/");
		} else {
			errorMessage = "Error Trying to sign up";
		}
	}
</script>

<form on:submit|preventDefault={signup}>
	<div class="field is-horizontal">
		<div class="field-body">
			<div class="field">
				<label for="firstname" class="label is-size-3">First Name</label>
				<input bind:value={firstName} id="firstname" class="input is-size-4 is-rounded" type="text" placeholder="Enter first name" name="firstName" />
			</div>
			<div class="field">
				<label for="lastname" class="label is-size-3">Last Name </label>
				<input bind:value={lastName} id="lastname" class="input is-size-4 is-rounded" type="text" placeholder="Enter last name" name="lastName" />
			</div>
		</div>
	</div>
	<div class="field">
		<label for="email" class="label is-size-3">Email</label>
		<input bind:value={email} id="email" class="input is-size-4 is-rounded" type="text" placeholder="Enter email" name="email" />
	</div>
	<div class="field">
		<label for="password" class="label is-size-3">Password</label>
		<input bind:value={password} id="password" class="input is-size-4 is-rounded" type="password" placeholder="Enter Password" name="password" />
	</div>
	<div class="field">
		<label for="repeatedPassword" class="label is-size-3">Repeat password</label>
		<input bind:value={repeatedPassword} id="repeatedPassword" class="input is-size-4 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword" />
	</div>
	<div class="field is-grouped">
		<button class="button is-link is-size-4 is-rounded">Sign Up</button>
	</div>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
