<template>
  <q-parallax :height="150" :speed="0.5">
    <template v-slot:media>
      <img src="https://pokemonapp-ivory.vercel.app/header-bkg.jpg" />
    </template>
    <img
      src="https://pokemonapp-ivory.vercel.app/logo.png"
      class="pokemon_logotipo"
    />
    <br />
  </q-parallax>
</template>

<script>
export default {
  components: {},
  name: "Header"
};
</script>
<style scoped>
.pokemon_card-image {
  height: 250px;
}
.pokemon_logotipo {
  width: 200px;
}
.home-title {
  font-size: 2em;
  line-height: 3rem;
}
</style>
