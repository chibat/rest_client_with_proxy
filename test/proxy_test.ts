import { exchange } from "../rest_client.ts";
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("ok", async () => {
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

  assertEquals(response.body, '{"text": "Hello"}\n');
  assertEquals(response.status, 200);
  assertEquals(response.json<{ text: string }>().text, "Hello");
  assertEquals(response.headers.get("content-length"), "18");
});
