node app.js | jq '.[].fizzBuzz35' | jq -s 'join (", ")' | sha256sum

