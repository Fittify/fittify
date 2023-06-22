<script>
	import Header from "../../lib/Header.svelte";
	import LobbyCard from "../../lib/LobbyCard.svelte";
	import LobbyDetails from "../../lib/LobbyDetails.svelte";
	import { lobbyService } from "../../services/lobby-service";

    let lobbies = lobbyService.getLobbies();
    let selectedLobby = null;
    let selectedLobbyIndex = null;

    function selectLobby(lobby, index) {
        selectedLobby = lobby;
        selectedLobbyIndex = index;
    }
    
    async function joinLobby() {
        await lobbyService.joinLobby(selectedLobbyIndex);
        lobbies = lobbyService.getLobbies();
        selectedLobby = lobbies[selectedLobbyIndex];
    }
</script>

<Header />
<section class="columns is-full mt-6 pt-6 mx-6">
    <div class="column is-half">
        <div class="columns is-full is-multiline">
        {#each lobbies as lobby, index}
        <LobbyCard lobby={lobby} on:click={() => selectLobby(lobby, index)}/>
        {:else}
        <span>Nothing to do here!</span>
        {/each}
        </div>
        <a href="/create-lobby" class="a-link-without-decoration overlay is-flex">
            <button class="button is-info is-rounded is-size-4">
                <p class="column has-text-white is-size-4">+ Create Lobby</p>
            </button>
        </a>
    </div>
    <div class="is-overlay overlay column is-half is-offset-half ">
        <div class="hero is-fullheight m-6 p-6">
            {#if selectedLobby}
            <LobbyDetails lobby={selectedLobby} on:click={() => joinLobby()}/>
            {:else}
            <div class="box hero-body mb-5"></div>
            {/if}
        </div>
    </div>
</section>
