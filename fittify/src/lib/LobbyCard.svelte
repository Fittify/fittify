<script>
    import { getDateTimeReadable, getIconSource } from "../services/utils";

    export let lobby;
</script>


<div class="column is-full">
    <div class="card">
        <div class="card-content">
            <div class="is-flex is-justify-content-space-between">
                <div>
                    <span class="is-size-4 has-text-black has-text-weight-bold">
                        {lobby.title}
                    </span>
                </div>
                <div>
                    <span class="icon-text is-size-4 has-text-grey p-0 m-0">
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
            <div class="is-size-4 has-text-black py-5">{lobby.description}</div>
            <div class="is-flex is-justify-content-space-between">
                <div>
                    <span class="icon-text is-size-4 has-text-black pt-5">
                        <span class="icon">
                            <i class="fas fa-solid fa-user"></i>
                        </span>
                        <span class="has-text-weight-bold">{lobby.players.length+1} / {lobby.maxPlayers}</span>
                    </span>
                </div>
                <div>
                    <button class="button is-size-5 is-rounded is-active" on:click>See the details</button>
                </div>
            </div>
        </div>
    </div>
</div>