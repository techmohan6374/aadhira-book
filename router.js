const routes = [
    { path: '/', component: introduction },
    { path: '/Main', component: Main },
    { path: '/singleflipBook/:id', component: SingleFlipBook }
];

const router = new VueRouter({
    routes,
});
