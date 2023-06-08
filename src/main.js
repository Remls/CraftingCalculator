import "./app.css";
import App from "./App.svelte";
import Footer from "./Footer.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const footer = new Footer({
  target: document.getElementById("footer"),
});

export default app;
export { footer };
