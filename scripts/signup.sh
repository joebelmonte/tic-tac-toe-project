curl --include --request POST "http://localhost:4741/sign-up/" \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORDCONFIRM}"'"
  }
}'
