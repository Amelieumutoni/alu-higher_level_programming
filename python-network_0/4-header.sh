#!/bin/bash

URL=$1

# Make a GET request and send the request header
response=$(curl -s -H "X-HolbertonSchool-User-Id: 98" $URL)

# Print the response body
echo $response
