export const lobbyService = {

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
        },
],
    localUrl: "http://localhost:8000",
    baseUrl: "https://fittify.pythonanywhere.com",

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
}