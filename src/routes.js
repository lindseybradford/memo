// routes.js

import home from "./layouts/home.vue";
const contact = () =>
  import(/* webpackChunkName: "secondary" */ "./layouts/contact.vue");
const error = () =>
  import(/* webpackChunkName: "secondary" */ "./layouts/404.vue");

const routes = [
  {
    path: "/",
    component: home,
    meta: {
      title: "Memo",
      transitionName: 'fade'
    }
  },
  {
    path: "/contact",
    component: contact,
    meta: {
      title: "Memo | Contact",
      transitionName: 'modal'
    }
  },
  {
    path: "/404",
    component: error,
    meta: {
      title: "Memo | 404",
      transitionName: 'fade'
    }
  }
];

export default routes;
