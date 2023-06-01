<script lang="ts">
	import Header from "$lib/Header.svelte";
	import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
	import '../app.css';
</script>

<Header>
	<WelcomeNavigator />
</Header>


	
<section class="hero is-fullheight">
	<div class="hero-body has-text-centered">
	  <div class="">
		<p class="title has-text-centered">
		  Fittify
		</p>
		<p class="subtitle has-text-centered">
			Are you looking for a partner for your favorite sport activity in Regensburg?
		</p>

		<button class="button is-info is-rounded has-text-centered">
			<a href="/signup" class="columns is-variable is-1">
				<p class="column">Sign up!</p>
			</a>
		</button>

	  </div>
	</div>
  </section>

  <section class="landingPage"></section>




