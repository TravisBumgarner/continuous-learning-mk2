const config = {
    whiteListUrls: ["/make_groups", "/auth"],
    db: {
        host: "localhost",
        user: "travisbumgarner",
        password: "",
        database: "foo"
    },
    slack: {
        team: "pluralsight",
        client_id: "2345022201.464517951189",
        scope: "chat:write:bot",
        client_secret: "5883d3383d745872e6b8e9deff196829",
        oauth_token: "xoxp-2345022201-380490878375-464563806020-25d8515707495d9fdae47c484b505188",
        signing_secret: "751347bb69285fd4ebece0beaca7cd92"
    }
}

module.exports = config

// https://slack.com/oauth/authorize?client_id=2345022201.464517951189&scope=chat:write:bot&redirect_uri=https://c3bd97a4.ngrok.io/auth

// https://slack.com/api/chat.postMessage?token=xoxp-2345022201-380490878375-474825535504-a5aabdee0d69b42ec646fa136360d260&channel=UB6EERUB1&text=hello