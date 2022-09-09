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
    // {
    //   path: "/toy",
    //   name: "toy-app",
    //   component: toyApp,
    // },
    // {
    //   path: "/toy/:toyId",
    //   name: "toy-details",
    //   component: toyDetails,
    // },
    // {
    //   path: "/toy/edit/:toyId?",
    //   name: "toy-edit",
    //   component: toyEdit,
    // },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: dashboardPage,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: aboutPage,
    // },
  ],
});

export default router;
