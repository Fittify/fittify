import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, d as each } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import "../../../chunks/stores.js";
const lobbyService = {
  lobbies: [
    {
      title: "Jogging session",
      sport: "Jogging",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 3,
      players: [],
      author_username: "username_1"
    },
    {
      title: "Football match",
      sport: "Football",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 8,
      players: [],
      author_username: "username_2"
    },
    {
      title: "Jogging session",
      sport: "Jogging",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 3,
      players: [],
      author_username: "username_3"
    },
    {
      title: "Football match",
      sport: "Football",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 8,
      players: [],
      author_username: "username_4"
    },
    {
      title: "Jogging session",
      sport: "Jogging",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 3,
      players: [],
      author_username: "username_5"
    },
    {
      title: "Football match",
      sport: "Football",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 8,
      players: [],
      author_username: "username_1"
    },
    {
      title: "Jogging session",
      sport: "Jogging",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 3,
      players: [],
      author_username: "username_2"
    },
    {
      title: "Football match",
      sport: "Football",
      dateTime: "2023-06-17T20:15",
      dueDateTime: "2023-06-17T20:15",
      description: "description of the event",
      location: "Regensburg",
      maxPlayers: 8,
      players: [],
      author_username: "username_1"
    }
  ],
  baseUrl: "http://localhost:8000",
  async createLobby(lobby) {
    this.lobbies.push(lobby);
    return true;
  },
  getLobbies() {
    return this.lobbies;
  },
  async joinLobby(lobbyIndex) {
    const user = localStorage.getItem("username");
    this.lobbies[lobbyIndex].players.push(user);
  }
};
function getDateTimeReadable(dateTime) {
  const dateAndTime = String(dateTime).split("T");
  return dateAndTime[0] + " | " + dateAndTime[1];
}
function getIconSource(sport) {
  return "/sport_icons/" + String(sport).toLowerCase() + "_icon.png";
}
const LobbyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lobby } = $$props;
  if ($$props.lobby === void 0 && $$bindings.lobby && lobby !== void 0)
    $$bindings.lobby(lobby);
  return `<div class="column is-full"><div class="card"><div class="card-content"><div class="is-flex is-justify-content-space-between"><div><span class="is-size-4 has-text-black has-text-weight-bold">${escape(lobby.title)}</span></div>
                <div><span class="icon-text is-size-4 has-text-grey p-0 m-0"><span class="has-text-weight-semibold">${escape(lobby.sport)}  </span>
                        <span class="icon"><figure class="image is-24x24"><img${add_attribute("src", getIconSource(lobby.sport), 0)} alt="icon"></figure></span></span></div></div>
            <div><span class="icon-text is-size-4 has-text-grey pt-1"><span class="icon"><i class="fas fa-light fa-clock"></i></span>
                    <span class="is-size-4">${escape(getDateTimeReadable(lobby.dateTime))}</span></span></div>
            <div class="is-size-4 has-text-black py-5">${escape(lobby.description)}</div>
            <div class="is-flex is-justify-content-space-between"><div><span class="icon-text is-size-4 has-text-black pt-5"><span class="icon"><i class="fas fa-solid fa-user"></i></span>
                        <span class="has-text-weight-bold">${escape(lobby.players.length + 1)} / ${escape(lobby.maxPlayers)}</span></span></div>
                <div><button class="button is-size-5 is-rounded is-active">See the details</button></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lobbies = lobbyService.getLobbies();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<section class="columns is-full mt-6 pt-6 mx-6"><div class="column is-half"><div class="columns is-full is-multiline">${lobbies.length ? each(lobbies, (lobby, index) => {
    return `${validate_component(LobbyCard, "LobbyCard").$$render($$result, { lobby }, {}, {})}`;
  }) : `<span>Nothing to do here!</span>`}</div>
        <a href="/create-lobby" class="a-link-without-decoration overlay is-flex"><button class="button is-info is-rounded is-size-3"><p class="column has-text-white is-size-3">+ Create Lobby</p></button></a></div>
    <div class="is-overlay overlay column is-half is-offset-half "><div class="hero is-fullheight m-6 p-6">${`<div class="box hero-body mb-5"></div>`}</div></div></section>`;
});
export {
  Page as default
};
