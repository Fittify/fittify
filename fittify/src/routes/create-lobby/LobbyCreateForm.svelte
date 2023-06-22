<script>
    import { goto } from "$app/navigation";
	import { lobbyService } from "../../services/lobby-service";
    import { accountService } from "../../services/account-service";

    const lobby = {
        title: "",
        sport: "Sport",
        dateTime: null,
        dueDateTime: null,
        description: "",
        location: "",
        maxPlayers: 1,
        players: [],
        author_username: accountService.getUsername(),
    }
	let errorMessage = "";

	async function create() {
        if (!validate()) {
            errorMessage = "Due Date-Time can't be later than the Date-Time.";
            return;
        }
		let success = await lobbyService.createLobby(lobby);
		if (success) {
			goto("/lobbies");
		} else {
            errorMessage = "Invalid values.";
		}
	}

    function validate() {
        return lobby.dateTime >= lobby.dueDateTime;
    }
</script>

<section class="columns is-full is-multiline is-centered">
    <form on:submit|preventDefault={create}>
        <div class="column is-full is-centered">
            <div class="columns is-centered">
                <div class="column is-half px-6">
                    <div class="control">
                        <label class="label is-size-6" for="title">Title</label>
                        <input bind:value={lobby.title} class="input is-size-6 is-rounded" type="text" placeholder="Title" name="title">
                    </div>
                </div>
                <div class="column is-half px-6">
                    <div class="control">
                        <label class="label is-size-6" for="sport">Sport</label>
                        <div class="select is-size-6 is-fullwidth is-rounded" name="sport">
                            <select bind:value={lobby.sport}>
                                <option disabled hidden>Sport</option>
                                <option>Basketball</option>
                                <option>Cycling</option>
                                <option>Football</option>
                                <option>Jogging</option>
                                <option>Swimming</option>
                                <option>Tennis</option>
                                <option>Volleyball</option>
                                <option>Yoga</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full">
            <div class="columns">
                <div class="column is-half px-6">
                    <div class="control">
                        <label for="dateTime" class="label is-size-6">Date-Time</label>
                    <input bind:value={lobby.dateTime} class="input is-size-6 is-rounded" type="datetime-local" name="dateTime" required>
                    </div>
                </div>
                <div class="column is-half px-6">
                    <div class="control">
                        <label for="dueDateTime" class="label is-size-6">Due Date-Time for joining</label>
                        <input bind:value={lobby.dueDateTime} class="input is-size-6 is-rounded" type="datetime-local" name="dueDateTime" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-full px-6">
            <textarea bind:value={lobby.description} class="textarea is-size-6" placeholder="Description" rows="3" name="description"></textarea>
        </div>
        <div class="column is-full px-6">
            <label class="label is-size-6" for="location">Location</label>
            <input bind:value={lobby.location} class="input is-size-6 is-rounded" type="text" placeholder="Street, House, PLZ, City" name="location">
        </div>
        <div class="column is-half px-6">
            <label class="label is-size-6" for="location">Max Players</label>
            <input bind:value={lobby.maxPlayers} class="input is-size-6 is-rounded" type="number" min="1" label="Number of players are needed">
        </div>
        {#if errorMessage}
        <div class="column is-centered has-text-centered">
            <span class="icon-text is-size-5 has-text-danger p-0 m-0">
                <span class="icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span>{errorMessage}</span>
            </span>
        </div>
        {/if}
        <div class="column is-centered has-text-centered">
            <button class="button is-size-5 is-rounded has-background-info has-text-white">Create Lobby</button>
        </div>
    </form>
</section>