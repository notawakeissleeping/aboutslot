import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
//import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
//因为以上三个组件都只使用了一次，而在main.js中这样注册出来的全局组件，所以不必要在这里声明，只需在使用这三个组件的那个文件中import就可以
const app = createApp(App);

//app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);
app.component("base-card", BaseCard);

app.mount("#app");
