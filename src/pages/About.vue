<template>
  <q-page class=" flex-center">
    <q-parallax :height="150" :speed="0.5">
      <template v-slot:media>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        />
      </template>
      <img src="/pokemon-logo.png" class="pokemon_logotipo" />
      <br />
    </q-parallax>
    <div class="q-mx-md q-my-md">
      <div class="row">
        <div class="col-12 col-md-12">
          <h1 class="about-title q-ma-none">Sobre a aplicação</h1>
        </div>
        <div class="col-12 col-md-12">
          <p class="about-text">{{ text }}</p>
        </div>
        <div class="col-12 col-md-4 q-px-xs">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/07/08/36/pokemon-1575834_1280.jpg"
            class="full-width"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 q-py-xs">
          <h4 class="about-subtitle q-ma-none">Alguns dos Pokemons aqui presentes:</h4>
          <small>(Conteudo salvo em localstorage)</small>
        </div>
        <div class="col-12 q-px-xs">
          <ul class="about-list">
            <li class="text-capitalize" v-for="(result, ikey) in pokemons" :key="ikey">
              {{ result.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "PageHome",
  computed: {
    ...mapState("pokemons", ["pokemons"])
  },
  data: () => ({
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus fermentum, maximus eros sed, ultricies enim. Aenean sagittis nibh eros. Curabitur tincidunt ac ligula id porta. Sed ut ligula velit. Praesent a pulvinar erat. Sed id dapibus odio. Aenean quis ullamcorper leo. Donec semper nisi nec molestie laoreet. Duis vestibulum mauris non porttitor vulputate. Nunc id est varius, dignissim magna at, pellentesque urna. Integer cursus sagittis justo, at suscipit lorem rutrum vel. Etiam malesuada arcu a lectus porttitor, eu feugiat purus convallis. Nullam interdum mauris eu metus pharetra, sed mattis massa pretium. Suspendisse euismod velit eget sagittis congue.Integer quis rutrum lectus, at sagittis mi. Sed eget enim fermentum. '+
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus fermentum, maximus eros sed, ultricies enim. Aenean sagittis nibh eros. Curabitur tincidunt ac ligula id porta. Sed ut ligula velit. Praesent a pulvinar erat. Sed id dapibus odio. Aenean quis ullamcorper leo. Donec semper nisi nec molestie laoreet. Duis vestibulum mauris non porttitor vulputate. Nunc id est varius, dignissim magna at, pellentesque urna. Integer cursus sagittis justo, at suscipit lorem rutrum vel. Etiam malesuada arcu a lectus porttitor, eu feugiat purus convallis. Nullam interdum mauris eu metus pharetra, sed mattis massa pretium. Suspendisse euismod velit eget sagittis congue.Integer quis rutrum lectus, at sagittis mi. Sed eget enim fermentum, varius quam nec, bibendum mi. Sed at ex diam. Vivamus nec sodales libero.'
  }),
  mounted() {
    this.actNamePokemon();
    console.log(this.pokemons);
  },
  methods: {
    ...mapActions("pokemons", ["actNamePokemon"])
  }
};
</script>
<style scoped>
.pokemon_logotipo {
  width: 200px;
}
.about-title {
  font-size: 2em;
}
.about-text{
  font-weight: 100;
}
.about-subtitle {
  font-size: 1em;
  font-weight: 600;
  line-height: 0.5rem;
}
.about-list {
  position:relative;
  margin:0;
  padding:0;
  width:100%;
}
.about-list li {
  display:block;
  list-style-type: none;
  box-sizing: border-box;
}
.about-list li:nth-child(odd) {
  clear:both;
  float:left;
  width:15%;
}

</style>
