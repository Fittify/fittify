<script>
	import Header from "$lib/Header.svelte";
	import '../app.css';
</script>

<Header />

<section class="columns is-vcentered is-full is-centered background-home-image">
	<div class="column is-three-fifths hero is-fullheight">
		<div class="hero-body has-text-centered">
			<div>
				<p class="title is-1 white-font">
					Fittify
				</p>
				<p class="subtitle is-4 white-font">
					Are you looking for a partner for your favorite sport activity in Regensburg?
				</p>
				<div class="columns is-centered">
					<div class="column is-three-fifths is-centered">
						<a href="/signup" class="a-link-without-decoration">
							<button class="button is-info is-rounded is-fullwidth">
								<p class="column white-font">Sign up!</p>
							</button>
						</a>
					</div>
				</div>
				<div class="columns is-centered">
					<div class="column is-half is-centered">
						<p class="white-font black-background">Or if you already have an account - 
							<a class="white-font-on-hover" href="/login">sign in</a>!
						</p>
					</div>
				</div>
			</div>	
		</div>
	</div>
</section>
