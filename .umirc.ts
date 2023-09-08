import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/events", component: "events" },
  ],
  npmClient: "npm",
});
