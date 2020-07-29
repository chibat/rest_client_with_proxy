#!/bin/bash

set -e

deno test --allow-net=raw.githubusercontent.com,github.com rest_client_test.ts


