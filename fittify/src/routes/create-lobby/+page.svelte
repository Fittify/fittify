<script>
	import '../../app.css';
	import Header from "../../lib/Header.svelte";
	import LobbyCreateForm from './LobbyCreateForm.svelte';
</script>

<Header />
<section class="columns is-full is-vcentered is-centered is-gapless scroll-blocked">
	<div class="column is-half hero is-fullheight background-lobby-no-sport-image">
		<a href="/lobbies" class="mt-6 pt-6 pl-5 is-size-4 has-text-weight-medium has-text-black a-link-without-decoration">
			<div class="icon">
				<i class="fas fa-solid fa-chevron-left"></i>
			</div>
			Back to Lobbies
		</a>
	</div>
	<div class="column is-half">
		<div class="columns is-vcentered is-centered">
			<div class="column pb-0 mb-0">
				<div class="container hero box is-fullheight pb-0 mb-0">
					<div class="hero-body pb-0 mb-0">
						<div class="container">
							<LobbyCreateForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>