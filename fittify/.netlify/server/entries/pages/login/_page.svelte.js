import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                   */import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
import "../../../chunks/singletons.js";
import "../../../chunks/stores.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `<form><div class="field is-size-1"><label class="label is-size-3" for="username">Username</label>
		<input class="input is-size-4 is-rounded" id="username" name="username" placeholder="Enter username" type="text"${add_attribute("value", username, 0)}></div>
	<div class="field"><label class="label is-size-3" for="password">Password</label>
		<input class="input is-size-4 is-rounded" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div>
	<div class="field"><button class="button is-link is-size-3 is-rounded">Log In</button></div></form>
${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}

<section class="columns is-full is-vcentered is-centered background-log-in-image"><div class="column is-half hero is-fullheight"></div>
	<div class="column is-half hero is-fullheight"><div class="columns is-vcentered is-centered"><div class="column is-one-third hero is-fullheight"></div>
			<div class="column is-two-thirds is-fullheight"><div class="container hero box is-fullheight"><div class="hero-body"><div class="container"><h1 class="title is-size-1 has-text-centered">Login</h1>
							${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
