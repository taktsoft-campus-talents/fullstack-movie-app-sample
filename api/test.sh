#!/bin/bash

if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    brew install jq
fi

# Test the API

# curl http://localhost:3000 # 404
# curl http://localhost:3000/api # 404
# curl http://localhost:3000/api/movies | jq
# curl http://localhost:3000/api/movies/1 | jq
# curl http://localhost:3000/api/actors/1 | jq
# curl http://localhost:3000/api/actors/2 | jq
# curl http://localhost:3000/api/movies/with-genre-and-actors | jq
