#!/bin/bash

SERVER_ONE_IP=$(docker-machine ip default)
SERVER_TWO_IP=$(docker-machine ip secundary)

sudo sed -i '' '/[[:space:]]serverone\.local$/d' /etc/hosts
sudo sed -i '' '/[[:space:]]servertwo\.local$/d' /etc/hosts

echo "$SERVER_ONE_IP    serverone.local" | sudo tee -a /etc/hosts
echo "$SERVER_TWO_IP    servertwo.local" | sudo tee -a /etc/hosts