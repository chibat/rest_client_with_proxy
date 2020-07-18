import { exchange } from "./rest_client.ts";
// import { exchange } from "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/rest_client.ts";

// chunk
// const url = "https://github.com/";

const response = await exchange(
  {
    request: {
      url:
        "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/test/hello.json",
    },
    proxy: {
      hostname: "localhost",
      port: 3128,
      credentials: { name: "user1", password: "test" },
    },
  },
);

type ResponseType = { text: string };
const responseText = response.json<ResponseType>().text;

console.log(responseText);
// hello

// deno run -A --unstable rest_client_test.ts

// $ /etc/init.d/squid restart
// /etc/squid/squid.conf

// test
// * http
// * https
// * http + proxy
// * https + proxy
