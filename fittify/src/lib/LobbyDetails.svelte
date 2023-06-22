<script>
    import { getDateTimeReadable, getIconSource } from "../services/utils";
	import UserInLobbyItem from "./UserInLobbyItem.svelte";
    import { accountService } from "../services/account-service";

    export let lobby;
    const username = accountService.getUsername();
</script>

<div class="container is-fluid mb-5 box">
    <div class="columns is-full is-multiline is-centered mt-1 pt-0">
        <div class="column is-full">
            <div class="is-flex is-justify-content-space-between">
                <div>
                    <span class="is-size-2 has-text-black has-text-weight-bold">
                        {lobby.title}
                    </span>
                </div>
                <div>
                    <span class="icon-text is-size-4 has-text-grey">
                        <span class="has-text-weight-semibold">{lobby.sport}&nbsp;&nbsp;</span>
                        <span class="icon">
                            <figure class="image is-24x24">
                                <img src={getIconSource(lobby.sport)} alt="icon">
                            </figure>
                        </span>
                    </span>
                </div>
            </div>
            <div>
                <span class="icon-text is-size-4 has-text-grey pt-1">
                    <span class="icon">
                        <i class="fas fa-light fa-clock"></i>
                    </span>
                    <span class="is-size-4">
                        {getDateTimeReadable(lobby.dateTime)}
                    </span>
                </span>
            </div>
        </div>
        <div class="column is-full">
            <div class="is-size-4 has-text-grey-dark py-5">{lobby.description}</div>
        </div>
        <div class="column is-full">
            <div class="is-flex is-justify-content-space-between">
                <div>
                    <span class="is-size-3 has-text-grey-darker has-text-weight-semibold">Team</span>
                </div>
                <div>
                    <span class="icon-text is-size-4 has-text-black">
                        <span class="icon">
                            <i class="fas fa-solid fa-user"></i>
                        </span>
                        <span class="has-text-weight-bold">&nbsp;&nbsp;{lobby.players.length+1} / {lobby.maxPlayers}</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="column is-full pt-2">
            <UserInLobbyItem username={lobby.author_username} isAuthor={true} />
            {#each lobby.players as player}
            <UserInLobbyItem username={player} isAuthor={false} />
            {/each}
        </div>
        <div class="column is-full">
            <div>
                <span class="is-size-3 has-text-grey-darker has-text-weight-semibold">Location</span>
            </div>
            <div class="pt-4">
                <span class="icon-text is-size-4 has-text-grey">
                    <span class="icon">
                        <i class="fa fa-map-marker"></i>
                    </span>
                    <span class="is-size-3 has-text-weight-semibold">{lobby.location}</span>
                </span>
            </div>
        </div>
        <div class="column is-full has-text-centered">
            {#if username && !(lobby.players.includes(username) || lobby.author_username === username)}
            <button class="button is-info is-rounded is-size-3" on:click>
                <p class="column has-text-white is-size-3">Join</p>
            </button>
            {/if}
        </div>
    </div>
</div>