#!/bin/bash

curl "http://localhost:4741/accomplishments" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "accomplishment": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "date_accomplished": "'"${DATE}"'",
      "color": "'"${COLOR}"'"
    }
  }'

echo
