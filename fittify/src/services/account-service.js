import axios from "axios";
import { loggedInUser } from "../stores";

export const accountService = {

    baseUrl: "https://fittify.pythonanywhere.com",
	localUrl: "http://localhost:8000",

	async login(username, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/login`, { username: username, password: password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.status == 200) {
				loggedInUser.set({
					username: username,
					token: response.data.token,
					_id: response.data.id
				});
				localStorage.token = response.data.token;
				localStorage.username = String(username);
				return true;
			}
			return false;
		} catch (error) {
			return false;
		}
	},

	async logout() {
		loggedInUser.set({
			email: "",
			token: "",
			_id: ""
		});
		axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("token");
		localStorage.removeItem("username");
	},

    async signup(user) {
        try {
            const user_data = {
				username: user.firstName + user.lastName,
                first_name: user.firstName,
				last_name: user.lastName,
				email: user.email,
				password: user.password
            };
            await axios.post(this.baseUrl + "/register", user_data);
            return true;
        } catch (error) {
            return false;
        }
    },

	getUsername() {
		return localStorage.getItem("username");
	},
};