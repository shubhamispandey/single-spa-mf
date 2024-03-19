import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@jio/navbar",
//   app: () => System.import("@jio/navbar"),
//   activeWhen: () => true,
//   // domElement: document.getElementById("nav-container"),
// });
registerApplication(
  "@jio/navbar",
  () => System.import("@jio/navbar"),
  () => true,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@jio/todo",
  () => System.import("@jio/todo"),
  () => true,
  { domElement: document.getElementById("todo-container") }
);

start({
  urlRerouteOnly: true,
});
