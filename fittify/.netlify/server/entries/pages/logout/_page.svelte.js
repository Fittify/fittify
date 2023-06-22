import { c as create_ssr_component } from "../../../chunks/index2.js";
import { c as client_method } from "../../../chunks/singletons.js";
import { a as accountService } from "../../../chunks/account-service.js";
const goto = /* @__PURE__ */ client_method("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  accountService.logout();
  goto("/");
  return ``;
});
export {
  Page as default
};
