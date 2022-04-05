<template>
  <q-page class="bg-black">
    <Header />
    <div class="row q-pt-md q-pa-lg bg-red-10 full-width flex flex-center">
      <div class="col-md-5 col-10  ">
        <q-input
          dense
          color="white"
          label-color="black"
          borderless
          bg-color="white"
          rounded outlined 
          v-model="current_id"
          placeholder="Pesquisar o pokemon (digite o nome ou id)"
        >
         <template v-slot:after>
         <q-btn
          label="Procurar"
          @click="setCurrentPokemon"
          class="full-height full-width text-black bg-secondary"
        />
        </template>
        </q-input>
      </div>
  
    </div>

    <div class="container q-pa-lg">
      <div v-if="currentPokemon_url" class="pokemon__search-result q-pa-sm">
        <div class="row flex-center ">
          <div
            class="col-12 col-md-12 text-white text-center text-h6 q-pb-none"
          >
            Pokemon encontrado
          </div>
        </div>
        <div class="row flex-center ">
          <div class="col-md-3 col-lg-3 col-12 q-px-lg q-py-sm item__poke">
            <Item :url="currentPokemon_url" />
          </div>
        </div>
      </div>
      <div class="row flex-center">
        <div
          class="col-md-3 col-lg-3 col-12 q-px-lg q-py-sm item__poke"
          v-for="(pokemon, ikey) in pokemons"
          :key="ikey"
        >
          <Item :url="pokemon.url" />
        </div>
        <div class="col-12 col-md-12 q-pa-md  text-center">
          <q-btn
            color="primary"
            label="Carregar mais.."
            class="col-4"
            @click="getAPI()"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from "src/components/Parts/Header.vue";
import Item from "src/components/pokemons/Item.vue";

import api from "../services/api";
export default {
  components: { Header },
  name: "PokemonPage",
  components: { Header, Item },
  data: () => ({
    currentPokemon_url: "",
    current_id: "",
    pokemons: [],
    pokemonsList: [],
    nextUrl: "/pokemon/"
  }),

  created() {},
  async mounted() {
    await this.getAPI();
  },
  methods: {
    triggerPositive() {
      this.$q.notify({
        type: "positive",
        position: "top",
        message: `Pokemon encontrado.`
      });
    },

    triggerNegative() {
      this.$q.notify({
        type: "negative",
        position: "top",
        message: `Ops, parece que este não existe..`
      });
    },
    showLoading() {
      this.$q.loading.show();
    },
    hideLoading() {
      this.$q.loading.hide();
    },
    setCurrentPokemon() {
      this.currentPokemon_url =
        "https://pokeapi.co/api/v2/pokemon/" + this.current_id.toLowerCase();
    },

    goBack() {
      this.currentPokemon.id = this.currentPokemon.id - 1;
      this.getAPI(this.currentPokemon.id);
    },
    goNext() {
      this.currentPokemon.id = this.currentPokemon.id + 1;
      this.getAPI(this.currentPokemon.id);
    },
    async getAPI() {
      this.showLoading();
      await api.get(this.nextUrl).then(res => {
        this.nextUrl = res.data.next;
        this.pokemons.push(...res.data.results);
        this.hideLoading();
      });
    }
  }
};
</script>
<style scoped>
.pokemon__search-result {
  background-color: #afafaf54;
}
.item__poke{
  width: 300px;
}
</style>
