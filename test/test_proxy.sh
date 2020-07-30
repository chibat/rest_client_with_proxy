#!/bin/bash

deno test --allow-net=localhost,raw.githubusercontent.com,github.com --unstable proxy_test.ts

