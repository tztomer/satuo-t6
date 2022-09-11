import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
// import aboutPage from "src/views/about-page.vue";
// import toyApp from "src/views/toy-app.cmp.vue";
// import toyEdit from "src/views/toy-edit.cmp.vue";
// import toyDetails from "src/views/toy-details.cmp.vue";
// import dashboardPage from "src/views/dashboard-page.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    
  ],
});

export default router;
