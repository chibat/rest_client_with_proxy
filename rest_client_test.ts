import { exchange } from "./rest_client.ts";
import { assertEquals } from "https://deno.land/std@0.62.0/testing/asserts.ts";

Deno.test("ok", async () => {
  const response = await exchange(
    {
      request: {
        url:
          "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/test/hello.json",
      },
    },
  );
  assertEquals(response.body, '{"text": "Hello"}\n');
  assertEquals(response.status, 200);
  assertEquals(response.json<{ text: string }>().text, "Hello");
  assertEquals(response.headers?.get("content-length"), "18");
});

Deno.test("not found", async () => {
  const response = await exchange(
    {
      request: {
        url:
          "https://raw.githubusercontent.com/chibat/rest_client_with_proxy/master/test/hello-notfound.json",
      },
    },
  );
  assertEquals(response.status, 404);
  assertEquals(response.body, "404: Not Found");
});
