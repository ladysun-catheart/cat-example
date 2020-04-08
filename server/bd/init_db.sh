#!/bin/bash

# Init db server
mkdir -p ./data
mongod --port 9010 --dbpath ./data