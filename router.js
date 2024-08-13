const routes = [
    { path: '/', component: Main },
    { path: '/singleflipBook/:id', component: SingleFlipBook }
];

const router = new VueRouter({
    routes,
});
