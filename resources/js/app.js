import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { registerScrollSpy } from "vue3-scroll-spy";
import VueApexCharts from "vue3-apexcharts";
import Toast from "vue-toastification";
import VueEasyLightbox from "vue-easy-lightbox";

import "vue-toastification/dist/index.css";
import "vue-multiselect/dist/vue-multiselect.css";

createInertiaApp({
    title: (title) => `${title} - Appointment System`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Toast)
            .use(VueEasyLightbox)
            .use(VueApexCharts)
            .mount(el);
    },
});

InertiaProgress.init({ color: "#328CF4" });
