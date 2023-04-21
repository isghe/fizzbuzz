node app.js | jq 'join (", ")' | sha256sum --tag
