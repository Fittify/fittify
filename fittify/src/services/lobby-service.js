export const lobbyService = {

    lobbies: [
        {
            title: "Jogging session",
            sport: "Jogging",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hey, I am Vasek and I would love to do some sports, but If I have to go jogging alone, I can't find the motivation. That's why I would like to have a partner I can walk with and talk to.",
            location: "Regensburg",
            maxPlayers: 3,
            players: [],
            author_username: "Vasek_Bolt"
        },
        {
            title: "Football match",
            sport: "Football",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Servus, I am Bart from the Czech Republic and I am currently studying in Regensburg. Being abroad means I can't do my favorite sport football, so I am searching for some cool people to play football with",
            location: "Regensburg",
            maxPlayers: 8,
            players: [],
            author_username: "Bart_Simpson"
        },
        {
            title: "Jogging session",
            sport: "Jogging",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hey guys, I am Ferdi and I am looking for someone I can go jogging with since I don't like jogging alone through a forest, but I still would like to go jogging in the nature.",
            location: "Regensburg",
            maxPlayers: 3,
            players: [],
            author_username: "Ferdi_on_Vacation"
        },
        {
            title: "Tennis: new opponents",
            sport: "Tennis",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hey guys, I am Leon and I love playing Tennis, but I always play against the same people and it gets really boring. So i want to find new opponents that I can play with!",
            location: "Regensburg",
            maxPlayers: 1,
            players: [],
            author_username: "Leon_Nole"
        },
        {
            title: "Yoga practise",
            sport: "Yoga",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hello, I am Raul and I started doing Yoga, but my problem is that I am not really good in it and I sometimes dont know if I am doing the exercises right. So it would be great to have someone who can tell me what I am doing wrong!",
            location: "Regensburg",
            maxPlayers: 3,
            players: [],
            author_username: "Raul_loves_Yoga_98"
        },
        {
            title: "Basketball Tournament",
            sport: "Basketball",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hello, my name is Peter and my friends and I created a Basketball team and we would like to compete, but unfortunately we are missing to players since 2 people have injuries. So if you are interested in playing Basketball, please contact me!",
            location: "Regensburg",
            maxPlayers: 2,
            players: [],
            author_username: "Peter_The_Knicks"
        },
        {
            title: "Cycling Tour",
            sport: "Cycling",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hey, I am Felix and I like to cycle, but no one in my friend group has the same love to cycling than I have. So maybe I can find on Fittify someone who has as much fun in cycling as I have.",
            location: "Regensburg",
            maxPlayers: 3,
            players: [],
            author_username: "Felix_disappeared"
        },
        {
            title: "Swimming Training",
            sport: "Swimming",
            dateTime: "2023-06-17T20:15",
            dueDateTime: "2023-06-17T20:15",
            description: "Hey, I am Gertrude and looking for someone I can train with. I am currently training to win some Tournaments in swimming and I think will have more progress if I am not training alone. So pls contact me",
            location: "Regensburg",
            maxPlayers: 2,
            players: [],
            author_username: "Gertrude1234"
        },
],
    localUrl: "http://localhost:8000",
    baseUrl: "http://fittify.pythonanywhere.com",

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
