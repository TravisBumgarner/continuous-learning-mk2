# UI

Currently not being used.

# API

## Setup

### Postgres

1. Create a local Postgres database

### Code

1. Clone repo
2. Install dependencies and install knex globally `npm i -g knex`
3. In `src/` copy `config.example.js` to `config.js` and fill in credentials
4. In `src/db` run `knex migrate:latest` and `knex seed:run`
5. Launch server from the root `api/` directory with `npm run start:dev`

### Working with Slack

1. Install [Ngrok](https://ngrok.com/) and then run it pointed at `ngrok http 3003`
2. Copy the url next to `Forwarding` it should look look like `https://abc123.ngrok.io`
3. Visit [Slack Apps](https://api.slack.com/apps) and create a new app
4. Click on `Slash Commands` on the left side and add a new command. (We use `/pairme`)
5. Fill in the information and paste the ngrok url under `Request Url`
6. Save and head over to slack. Type in the command entered in step 4 and you should receive a help message back
