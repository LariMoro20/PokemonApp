const routes = [{
    path: '/',
    component: () =>
        import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () =>
            import('src/pages/PokemonPage.vue')
    },
    ]
}]

export default routes