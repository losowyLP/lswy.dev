import { createApp } from "vue";
import router from "./router";

import "./style.css";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.component("Navbar", Navbar).component("Footer", Footer);

app.use(router);
app.mount("#app");
