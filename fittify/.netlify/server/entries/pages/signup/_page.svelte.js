import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
import "../../../chunks/singletons.js";
import "../../../chunks/stores.js";
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let repeatedPassword = "";
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><label for="firstname" class="label is-size-3">First Name</label>
				<input id="firstname" class="input is-size-4 is-rounded" type="text" placeholder="Enter first name" name="firstName"${add_attribute("value", firstName, 0)}></div>
			<div class="field"><label for="lastname" class="label is-size-3">Last Name </label>
				<input id="lastname" class="input is-size-4 is-rounded" type="text" placeholder="Enter last name" name="lastName"${add_attribute("value", lastName, 0)}></div></div></div>
	<div class="field"><label for="email" class="label is-size-3">Email</label>
		<input id="email" class="input is-size-4 is-rounded" type="text" placeholder="Enter email" name="email"${add_attribute("value", email, 0)}></div>
	<div class="field"><label for="password" class="label is-size-3">Password</label>
		<input id="password" class="input is-size-4 is-rounded" type="password" placeholder="Enter Password" name="password"${add_attribute("value", password, 0)}></div>
	<div class="field"><label for="repeatedPassword" class="label is-size-3">Repeat password</label>
		<input id="repeatedPassword" class="input is-size-4 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword"${add_attribute("value", repeatedPassword, 0)}></div>
	<div class="field is-grouped"><button class="button is-link is-size-4 is-rounded">Sign Up</button></div></form>
${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}

<section class="columns is-full is-vcentered is-centered background-sign-up-image"><div class="column is-half hero is-fullheight"></div>
	<div class="column is-half hero is-fullheight"><div class="columns is-vcentered is-centered"><div class="column is-one-third hero is-fullheight"></div>
			<div class="column is-two-thirds is-fullheight"><div class="container hero box is-fullheight"><div class="hero-body"><div class="container"><h1 class="title is-size-1 has-text-centered">Register</h1>
							${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})}</div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
