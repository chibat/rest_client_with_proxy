#!/bin/bash

set -e

cd $(dirname $0)

deno test --allow-net=raw.githubusercontent.com,github.com rest_client_test.ts


