import { createRouter, createWebHistory } from "vue-router";
import JournalView from "../views/JournalView.vue";
import ContactView from "../views/ContactView.vue";
import KeyboardView from "../views/KeyboardView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/journal",
            name: "journal",
            component: JournalView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/keyboard",
            name: "keyboard",
            component: KeyboardView,
        },
    ],
});

export default router;
