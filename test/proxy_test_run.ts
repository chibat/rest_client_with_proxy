import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";

const process = Deno.run({
  cmd: [
    Deno.execPath(),
    "test",
    "--allow-net=localhost,raw.githubusercontent.com,github.com",
    "--unstable",
    "proxy_test.ts",
  ],
});

const status = await process.status();
assertEquals(status.code, 0);
process.close();

Deno.exit(status.code);
