#!/bin/bash

curl "http://localhost:4741/accomplishments/${ID}" \
  --include \
  --request PATCH \
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
