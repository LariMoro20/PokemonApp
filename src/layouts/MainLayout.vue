<template>
  <q-layout view="lHh Lpr lFf">
    <q-pull-to-refresh @refresh="refresh">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="text-center">
          <img src="/pokemon-logo.png" class="pokemon_logotipo" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label color="red-10" header class="pokemon_menu-header">
          Menu
        </q-item-label>

        <q-item color="red-10" clickable  to="/" v-ripple class="text-grey-8 pokemon_menu-item">
          <q-item-section side>
            <q-icon name="home" color="red" />
          </q-item-section>
          <q-item-section>
              <q-item-label>Inicial</q-item-label>
          </q-item-section>
        </q-item>
        <q-item color="red-10" clickable   to="/about" v-ripple class="text-grey-8 pokemon_menu-item">
          <q-item-section side>
            <q-icon name="info" color="red" />
          </q-item-section>
          <q-item-section>
              <q-item-label>Sobre</q-item-label>
          </q-item-section>
        </q-item>
        <q-item color="red-10" clickable v-ripple  to="/pokemons" class="text-grey-8 pokemon_menu-item">
          <q-item-section side>
            <q-icon name="catching_pokemon" color="red" />
          </q-item-section>
          <q-item-section>
              <q-item-label>Pokemons</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <footer>
        <div class="row">
          <div class="pokemon_footer col-12 q-py-sm text-center">
            <small>{{ year }} &copy; Lari Moro</small>
          </div>
        </div>
      </footer>
    </q-page-container>
    </q-pull-to-refresh>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data: () => ({
    year: new Date().getFullYear(),
    leftDrawerOpen: false
  }),
  methods: {
    refresh (done) {
      setTimeout(() => {
        console.log('Refresh..')
        done()
      }, 1000)
    }
  }
};
</script>
<style scoped>
.pokemon_logotipo {
  width: 150px;
}
.pokemon_footer {
  background-color: #b71c1c;
  color: white;
}
.pokemon_menu-header {
  background-color: #b71c1c;
  color: white;
}
.pokemon_menu-item {
  color: black;
  text-decoration: none;
  font-weight: 600;
}
a {
  text-decoration: none;
}
</style>
