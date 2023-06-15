<script>
	import '../../app.css';
	import Header from "$lib/Header.svelte";
	import LoginForm from "./LoginForm.svelte";
</script>

<Header />

<section class="columns is-full is-vcentered is-centered background-log-in-image">
	<div class="column is-half hero is-fullheight" />
	<div class="column is-half hero is-fullheight">
		<div class="columns is-vcentered is-centered">
			<div class="column is-one-quarter hero is-fullheight" />
			<div class="column is-three-quarters">
				<div class="box is-fullheight py-6 mt-6 ">
					<h1 class="title has-text-centered">Login</h1>
					<LoginForm />
				</div>
			</div>
		</div>
	</div>
</section>