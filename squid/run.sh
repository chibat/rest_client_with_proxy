#!/bin/sh

docker run --name squid -d --restart=always \
  --publish 3128:3128 \
  --volume ${PWD}/.htpasswd:/etc/squid/.htpasswd \
  --volume ${PWD}/squid.conf:/etc/squid/squid.conf \
  sameersbn/squid:3.5.27-2

