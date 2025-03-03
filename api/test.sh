#!/bin/bash

if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    brew install jq
fi

# Test the API

curl http://localhost:3000/api/movies | jq
