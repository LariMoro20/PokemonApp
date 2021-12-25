<template>
  <q-page class="flex flex-center">
    <Header />
    <div class="row flex-center q-pt-md">
      <q-card class="my-card">
        <div class="text-center">
          <img class="pokemon_card-image q-pa-md" :src="currentPokemon.image" />
        </div>
        <q-card-section>
          <div class="text-h6 text-capitalize">
            Nome: {{ currentPokemon.name }}
          </div>
          <div class="text-subtitle2">
            Experiência: {{ currentPokemon.base_experience }}
          </div>
          <ul>
            <li v-for="(hability, ikey) in currentPokemon.hability" :key="ikey">
              {{ hability.ability.name }}
            </li>
          </ul>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="row ">
            <div class="col-10">
              <q-input
                standout
                v-model="currentPokemon.id"
                label="Pesquisar o pokemon"
              />
            </div>
            <div class="col-2">
              <q-btn
                color="primary"
                @click="foundPoke"
                label="GO!"
                class="full-height"
              />
            </div>
            <div class="col-12 justify-between text-center">
              <q-btn @click="goBack" icon="arrow_back_ios" />
              <q-btn @click="goNext" icon="arrow_forward_ios" />
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div class="col-12 col-md-12 q-pa-md  text-center">
        <p>
          Esta aplicação utiliza a api extena
          <a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a>.
          Por este motivo, pode apresentar instabilidade
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from "src/components/Parts/Header.vue";
import api from "../services/api";
export default {
  components: { Header },
  name: "PokemonPage",
  components: { Header },
  data: () => ({
    currentPokemon: {
      name: "",
      image: "",
      base_experience: "",
      hability: {},
      id: 1
    }
  }),

  created() {
    this.foundPoke();
  },
  methods: {
    foundPoke() {
      this.sendAPI(this.currentPokemon.id);
    },
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

    goBack() {
      this.currentPokemon.id = this.currentPokemon.id - 1;
      this.sendAPI(this.currentPokemon.id);
    },
    goNext() {
      this.currentPokemon.id = this.currentPokemon.id + 1;
      this.sendAPI(this.currentPokemon.id);
    },

    sendAPI(idPoke) {
      this.showLoading();
      api
        .get("/pokemon/" + idPoke)
        .then(response => {
          this.currentPokemon.name = response.data.name;
          this.currentPokemon.id = response.data.id;
          this.currentPokemon.hability = response.data.abilities;
          this.currentPokemon.base_experience = response.data.base_experience;
          this.currentPokemon.image =
            response.data.sprites.other.dream_world.front_default != null
              ? response.data.sprites.other.dream_world.front_default
              : "/notfound.png";

          console.log(this.currentPokemon.image);
          this.triggerPositive();
          this.hideLoading();
        })
        .catch(error => {
          this.triggerNegative();
          this.hideLoading();
        });
    }
  }
};
</script>
<style scoped>
.pokemon_card-image {
  height: 250px;
}
</style>
