<script lang="ts">
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";

    let repeatedPassword = "";
	let errorMessage = "";
	const user = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	async function signup() {
		if (user.password !== repeatedPassword) {
			errorMessage = "Password and repeated password have to be the same!";
			return;
		}
		let success = await accountService.signup(user);
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
				<label for="firstname" class="label is-size-4">First Name</label>
				<input bind:value={user.firstName} id="firstname" class="input is-size-5 is-rounded" type="text" placeholder="Enter first name" name="firstName" />
			</div>
			<div class="field">
				<label for="lastname" class="label is-size-4">Last Name </label>
				<input bind:value={user.lastName} id="lastname" class="input is-size-5 is-rounded" type="text" placeholder="Enter last name" name="lastName" />
			</div>
		</div>
	</div>
	<div class="field">
		<label for="email" class="label is-size-4">Username</label>
		<input value={user.firstName + user.lastName} class="input is-size-5 is-rounded" type="text" name="username" disabled/>
	</div>
	<div class="field">
		<label for="email" class="label is-size-4">Email</label>
		<input bind:value={user.email} id="email" class="input is-size-5 is-rounded" type="text" placeholder="Enter email" name="email" />
	</div>
	<div class="field">
		<label for="password" class="label is-size-4">Password</label>
		<input bind:value={user.password} id="password" class="input is-size-5 is-rounded" type="password" placeholder="Enter Password" name="password" />
	</div>
	<div class="field">
		<label for="repeatedPassword" class="label is-size-4">Repeat password</label>
		<input bind:value={repeatedPassword} id="repeatedPassword" class="input is-size-5 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword" />
	</div>
	<div class="field is-grouped">
		<button class="button is-link is-size-5 is-rounded">Sign Up</button>
	</div>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
