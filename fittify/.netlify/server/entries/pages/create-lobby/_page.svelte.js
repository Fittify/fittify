import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                   */import { H as Header } from "../../../chunks/Header.js";
import "../../../chunks/singletons.js";
import { a as accountService } from "../../../chunks/account-service.js";
const LobbyCreateForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const lobby = {
    title: "",
    sport: "Sport",
    dateTime: null,
    dueDateTime: null,
    description: "",
    location: "",
    maxPlayers: 1,
    players: [],
    author_username: accountService.getUsername()
  };
  return `<section class="columns is-full is-multiline is-centered"><form><div class="column is-full is-centered"><div class="columns is-centered"><div class="column is-half px-6"><div class="control"><label class="label is-size-6" for="title">Title</label>
                        <input class="input is-size-5 is-rounded" type="text" placeholder="Title" name="title"${add_attribute("value", lobby.title, 0)}></div></div>
                <div class="column is-half px-6"><div class="control"><label class="label is-size-6" for="sport">Sport</label>
                        <div class="select is-size-5 is-fullwidth is-rounded" name="sport"><select><option disabled hidden value="Sport">Sport</option><option value="Basketball">Basketball</option><option value="Cycling">Cycling</option><option value="Football">Football</option><option value="Jogging">Jogging</option><option value="Swimming">Swimming</option><option value="Tennis">Tennis</option><option value="Volleyball">Volleyball</option><option value="Yoga">Yoga</option></select></div></div></div></div></div>
        <div class="column is-full"><div class="columns"><div class="column is-half px-6"><div class="control"><label for="dateTime" class="label is-size-6">Date-Time</label>
                    <input class="input is-size-5 is-rounded" type="datetime-local" name="dateTime" required${add_attribute("value", lobby.dateTime, 0)}></div></div>
                <div class="column is-half px-6"><div class="control"><label for="dueDateTime" class="label is-size-6">Due Date-Time for joining</label>
                        <input class="input is-size-5 is-rounded" type="datetime-local" name="dueDateTime" required${add_attribute("value", lobby.dueDateTime, 0)}></div></div></div></div>
        <div class="column is-full px-6"><textarea class="textarea is-size-5" placeholder="Description" rows="3" name="description">${""}</textarea></div>
        <div class="column is-full px-6"><label class="label is-size-6" for="location">Location</label>
            <input class="input is-size-5 is-rounded" type="text" placeholder="Street, House, PLZ, City" name="location"${add_attribute("value", lobby.location, 0)}></div>
        <div class="column is-half px-6"><label class="label is-size-6" for="location">Max Players</label>
            <input class="input is-size-5 is-rounded" type="number" min="1" label="Number of players are needed"${add_attribute("value", lobby.maxPlayers, 0)}></div>
        ${``}
        <div class="column is-centered has-text-centered"><button class="button is-size-4 is-rounded has-background-info has-text-white">Create Lobby</button></div></form></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<section class="columns is-full is-vcentered is-centered is-gapless scroll-blocked"><div class="column is-half hero is-fullheight background-lobby-no-sport-image"><a href="/lobbies" class="mt-6 pt-6 pl-5 is-size-3 has-text-weight-medium has-text-black a-link-without-decoration"><div class="icon"><i class="fas fa-solid fa-chevron-left"></i></div>
			Back to Lobbies
		</a></div>
	<div class="column is-half"><div class="columns is-vcentered is-centered"><div class="column"><div class="container hero box is-fullheight"><p class="is-size-3">Create new lobby</p>
					<div class="hero-body"><div class="container">${validate_component(LobbyCreateForm, "LobbyCreateForm").$$render($$result, {}, {}, {})}</div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
