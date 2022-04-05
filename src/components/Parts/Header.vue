<template>
  <q-parallax :height="180" :speed="0.5">
    <template v-slot:media>
      <img
        src="https://pokedex-larimoro20.vercel.app/header-bkg.jpg"
        alt="milky way"
      />
    </template>
    <img
      src="https://pokedex-larimoro20.vercel.app//logo.png"
      class="pokemon_logotipo"
      alt="pokemon logo"
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
