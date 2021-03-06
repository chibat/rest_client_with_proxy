# REST Client with Configurable Proxy for Deno

[![CI](https://github.com/chibat/rest_client_with_proxy/workflows/CI/badge.svg)](https://github.com/chibat/rest_client_with_proxy/actions)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/raw.githubusercontent.com/chibat/rest_client_with_proxy/master/rest_client.ts)

This repository is currently experimental.


## hello.json

```
{"text": "Hello"}
```

## example.ts

```typescript
import { exchange } from "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/rest_client.ts";

const response = await exchange(
  {
    request: {
      url:
        "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/test/hello.json",
    },
    proxy: {
      hostname: "proxy-server.example.com",
      port: 3128,
      credentials: { name: "user1", password: "test" },
    },
  },
);

type ResponseType = { text: string };

const responseText = response.json<ResponseType>().text;

console.log(responseText);
```

## Execute

```
$ deno cache --reload example.ts
$ deno run --allow-net --unstable example.ts
Hello
```

