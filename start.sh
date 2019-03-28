#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

docker-machine start default
docker-machine start secundary

if [[ $(docker-machine status default) != "Running" ]]; then
    echo Please, create the docker machine default, see readme for reference
    exit 1
fi
if [[ $(docker-machine status secundary) != "Running" ]]; then
    echo Please, create the docker machine secundary, see readme for reference
    exit 1
fi

eval "$(docker-machine env default)"
docker build -t cookie-test/server-one $DIR/ServerOne/
docker kill $(docker ps -q) &> /dev/null
docker run -p 80:3000 -d cookie-test/server-one

eval "$(docker-machine env secundary)"
docker build -t cookie-test/server-two $DIR/ServerTwo/
docker kill $(docker ps -q) &> /dev/null
docker run -p 80:3000 -d cookie-test/server-two

echo ----------------------------------------------------------
echo All set. Run dns.sh in order to map hosts to .local domain
echo ----------------------------------------------------------