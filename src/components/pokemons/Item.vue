<template>
  <q-card class="my-card">
    <div class="col-md-12 pokemon__card-number">
      <div class="text-h6 text-capitalize q-pa-xs">
        #{{ currentPokemon.id }} {{ currentPokemon.name }}
      </div>
    </div>
    <div
      class="text-center pokemon__card-image flex items-center justify-center q-pa-lg"
    >
      <img class="pokemon__card-image-img" :src="currentPokemon.image" />
    </div>
    <q-card-section class="text-center ">
      <div class="col-md-12 items-center justify-center flex">
        <q-btn
          label="Detalhes"
          color="primary"
          @click="openDialog = !openDialog"
        />
      </div>

      <q-dialog class="bg-grey-10 text-white" v-model="openDialog">
        <q-card
          class="bg-grey-10 text-white full-height"
          style="width:100%; max-width: 100vw;"
        >
          <q-card-section class="text-center">
            <div class="text-h6 text-capitalize">
              #{{ currentPokemon.id }} {{ currentPokemon.name }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none scroll full-height flex items-center justify-center" style="max-height: 70vh">
            <div class="itemtrst full-width">
            <div class="row">
              <div class="col-md-12 text-center full-width ">
                <div class="pokemon__modal-image">
                  <img
                    class="pokemon__modal-image-img q-pa-md"
                    :src="currentPokemon.image"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 full-width">
                <div class="col-md-12 full-width text-center text-h6">
                  Tipos
                </div>
                <div
                  class="row flex  q-pa-md bg-black text-white flex-center justify-around"
                >
                  <div>
                    <span
                      class="pokemon__types-item pokemon__types-item-type bg-primary text-white text-capitalize"
                      v-for="(type, ikey) in currentPokemon.types"
                      :key="ikey"
                    >
                      {{ type.type.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12 full-width">
                <div
                  class="row flex pokemon__skills q-pa-sm bg-black text-white flex-center justify-around "
                >
                  <div class="pokemon__skills-item text-capitalize">
                    Habilidade:
                    <span
                      class="pokemon__types-item text-capitalize"
                      v-for="(hability, ikey) in currentPokemon.abilities"
                      :key="ikey"
                    >
                      {{ hability.ability.name }}
                    </span>
                  </div>
                  <div class="pokemon__skills-item">
                    Altura: {{ currentPokemon.height }} m
                  </div>
                  <div class="pokemon__skills-item">
                    Peso: {{ currentPokemon.height }} kg
                  </div>
                </div>
                <div
                  class="row flex pokemon__skills q-pa-sm bg-black text-white flex-center justify-between"
                >
                  <div class="pokemon__skills-item">
                    HP: {{ currentPokemon.hp }}
                  </div>
                  <div class="pokemon__skills-item">
                    Ataque: {{ currentPokemon.attack }}
                  </div>
                  <div class="pokemon__skills-item">
                    Defesa: {{ currentPokemon.defense }}
                  </div>
                  <div class="pokemon__skills-item">
                    Ataque especial: {{ currentPokemon.special_attack }}
                  </div>
                  <div class="pokemon__skills-item">
                    Defesa especial: {{ currentPokemon.special_defense }}
                  </div>
                  <div class="pokemon__skills-item">
                    Velocidade: {{ currentPokemon.speed }}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </q-card-section>

          <q-card-actions
            align="right"
            class="bg-grey-10 text-white text-center flex justify-center q-pb-lg"
          >
            <q-btn flat label="Fechar" class="bg-red-10 col-4" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

<script>
import api from "../../services/api";

export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    openDialog: false,
    currentPokemon: {
      id: "",
      name: "",
      id: "",
      type: ""
    }
  }),
  created() {
    this.getPokeByURL();
  },
  watch: {
    url: function() {
      this.getPokeByURL();
    }
  },
  methods: {
    getPokeByURL() {
      api
        .get(this.url)
        .then(response => {
          this.currentPokemon.name = response.data.name;
          this.currentPokemon.types = response.data.types;
          this.currentPokemon.id = response.data.id;
          this.currentPokemon.abilities = response.data.abilities;
          this.currentPokemon.height = response.data.height / 10;
          this.currentPokemon.weight = response.data.weight / 10;
          this.currentPokemon.base_experience = response.data.base_experience;
          this.currentPokemon.image =
            response.data.sprites.other.dream_world.front_default != null
              ? response.data.sprites.other.dream_world.front_default
              : "/notfound.png";
          //Special stats
          this.currentPokemon.hp = response.data.stats[0].base_stat;
          this.currentPokemon.attack = response.data.stats[1].base_stat;
          this.currentPokemon.defense = response.data.stats[2].base_stat;
          this.currentPokemon.special_attack = response.data.stats[3].base_stat;
          this.currentPokemon.special_defense =
            response.data.stats[4].base_stat;
          this.currentPokemon.speed = response.data.stats[5].base_stat;
        })
        .catch(() => {
          this.$q.notify({
            type: "negative",
            position: "top",
            message: `Ops, parece que este não existe..`
          });
        });
    }
  }
};
</script>

<style scoped>
.pokemon__card-image-img {
  height: 200px;
  max-width: 100%;
  transform: scale(1);
}
.pokemon__card-image-img:hover {
  transform: scale(1.1);
}
.pokemon__modal-image-img {
  content: "";
  background: url("/pokeball.png") 50% no-repeat;
  background-size: auto;
  background-size: auto;
  background-size: cover;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  max-width: 100%;
}
.pokemon__modal-image::before {
  content: "";
  background: url("/pokeball.png") 50% no-repeat;
}
.pokemon__types-item {
  background-color: white;
  color: black;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
}
.pokemon__types-item-type {
  font-size: 1.3rem;
  padding: 10px;
   margin: 10px;
  color: black;
}
.pokemon__card-image::before {
  content: "";
  background: url("/pokeball.png") 50% no-repeat;
  background-size: auto;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  opacity: 1;
  max-width: 100%;
}
.pokemon__skills {
  border-top: 2px solid #4713d6;
  margin-bottom: 5px;
  border-bottom: 2px solid #4713d6;
}
.pokemon__skills-item {
  padding: 7px;
  font-size: 1.2rem;
}
.pokemon__card-number {
  background-color: #921616;
  color: white;
  border-radius: 0;
}
</style>
