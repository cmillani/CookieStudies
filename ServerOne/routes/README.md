# Cookie Tests

This is a project created in order to study the operation of web cookies and how to safely use them to determine user sessions.

## Setup
In order to run the project, you need to: 

* have `docker` setup and running, 
* have two `docker-machine` running (we are using `default` and `secundary` as the names),
* run `start.sh`, that will start the machines and a container inside each one
* run `dns.sh`, that will write two entries to `/etc/hosts` in order to access the docker machines as .local domains

## Running

Once both scripts have been run successfully, simply type http://serverone.local or http://servertwo.local on your browser to access the servers.

## Roadmap

- [x] Simple test example: Form with auto save
- [ ] Persistent and session cookies
- [ ] HttpOnly, Secure, SameSite cookies
- [ ] Supercookie and third-party cookies
- [ ] iframe examples
- [ ] Cross Site Scripting examples
- [ ] Origin and Referer validation
- [ ] Authentication data