import Vue from 'vue';
import VueRouter from 'vue-router';
import ListComponent from '../components/BookList';
import FormComponent from '../components/BookForm';

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "landingPage",
        component: ListComponent
    },
    {
        path: "/form",
        name: "form",
        component: FormComponent
    }
]

//Initialize a vue router
const router = new VueRouter({
    routes,
    mode: "history",
});

export default router