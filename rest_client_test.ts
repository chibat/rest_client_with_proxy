import { exchange, Request } from "./rest_client.ts";

// normal
const url =
  "https://gist.githubusercontent.com/chibat/b207260420c1b85012036ffc6743f427/raw/16d7a15460df1d40596b2e6a151fd2604ea10afd/hello.txt";

// chunk
// const url = "https://github.com/";

const request: Request = { method: "GET", url: url };
const res = await exchange(
  request,
  { hostname: "localhost", port: 3128, credentials: {name: "user1", password: "test"}},
);
console.log("Status: " + res.status);
console.log("Body: " + res.body);

// deno run -A --unstable http_client_test.ts

// $ /etc/init.d/squid restart
// /etc/squid/squid.conf

// test
// * http
// * https
// * http + proxy
// * https + proxy

