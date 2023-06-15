import axios from "axios";
import { loggedInUser } from "../stores";

export const accountService = {

    baseUrl: "http://localhost:8000",

	async login(username, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/login`, { username: username, password: password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				loggedInUser.set({
					username: username,
					token: response.data.token,
					_id: response.data.id
				});
				localStorage.account = JSON.stringify({ username: username, token: response.data.token });
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
        localStorage.removeItem("account");
	},

    async signup(firstName, lastName, email, password) {
        try {
            const user_data = {
				username: firstName+'_'+lastName,
                first_name: firstName,
				last_name: lastName,
				email: email,
				password: password
            };
            await axios.post(this.baseUrl + "/register", user_data);
            return true;
        } catch (error) {
            return false;
        }
    }
};