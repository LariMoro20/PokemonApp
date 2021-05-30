const routes = [{
    path: '/',
    component: () =>
        import ('layouts/MainLayout.vue'),
    children: [{
            path: '',
            component: () =>
                import ('src/pages/Home.vue')
        },
        {
            path: 'about',
            component: () =>
                import ('src/pages/About.vue')
        },
        {
            path: 'pokemons',
            component: () =>
                import ('src/pages/PokemonPage.vue')
        }

    ]
}]

export default routes