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
    <div class="row">
      <div class="col-12 col-md-4">
        <date @newDate="changeDate" />
      </div>
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12 col-md-12">
            <text-component @newItem="saveAnotation" />
          </div>
          <div class="col-12 col-md-12 q-pa-md">
            <q-list
              bordered
              padding
              class="rounded-borders full-width"
            >
              <q-item-label header>Anotações</q-item-label>

              <q-item v-ripple v-for="(anotation, ikey) in anotations" :key="ikey">
                <q-item-section avatar top>
                  <q-avatar icon="label" color="green" text-color="white" />
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1" v-html="anotation.text"></q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-btn round color="primary" icon="delete" @click="removeAnotation(anotation.id)"/>

                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Date from "src/components/Date.vue";
import TextComponent from "src/components/TextComponent.vue";
export default {
  components: {
    Date,
    TextComponent
  },
  computed: {
    ...mapState("anotations", ["anotations"]),
  },
  name: "PageHome",
  data: () => ({
    todayDate: "Escolha a data",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus fermentum, maximus eros sed, ultricies enim. Aenean sagittis nibh eros. Curabitur tincidunt ac ligula id porta. Sed ut ligula velit. Praesent a pulvinar erat. Sed id dapibus odio. Aenean quis ullamcorper leo. Donec semper nisi nec molestie laoreet. Duis vestibulum mauris non porttitor vulputate. Nunc id est varius, dignissim magna at, pellentesque urna. Integer cursus sagittis justo, at suscipit lorem rutrum vel. Etiam malesuada arcu a lectus porttitor, eu feugiat purus convallis. Nullam interdum mauris eu metus pharetra, sed mattis massa pretium. Suspendisse euismod velit eget sagittis congue.Integer quis rutrum lectus, at sagittis mi. Sed eget enim fermentum. ",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus fermentum, maximus eros sed, ultricies enim. Aenean sagittis nibh eros. Curabitur tincidunt ac ligula id porta. Sed ut ligula velit. Praesent a pulvinar erat. Sed id dapibus odio. Aenean quis ullamcorper leo. Donec semper nisi nec molestie laoreet. Duis vestibulum mauris non porttitor vulputate. Nunc id est varius, dignissim magna at, pellentesque urna. Integer cursus sagittis justo, at suscipit lorem rutrum vel. Etiam malesuada arcu a lectus porttitor, eu feugiat purus convallis. Nullam interdum mauris eu metus pharetra, sed mattis massa pretium. Suspendisse euismod velit eget sagittis congue.Integer quis rutrum lectus, at sagittis mi. Sed eget enim fermentum, varius quam nec, bibendum mi. Sed at ex diam. Vivamus nec sodales libero."
  }),
  mounted() {
    this.actGetAnotations()
    this.$notify.success("Aplicação carregada")
  },
  methods: {
    ...mapActions("anotations", ["actGetAnotations", "actSetAnotations","actRemoveAnotations"]),
    changeDate(value) {
      this.todayDate = value;
    },
    removeAnotation(value){
      this.$dialog.confirm('Apagar?','Tem certeza que deseja deletar a anotação?').onOk(async () =>{
        this.actRemoveAnotations(value)
        this.$notify.success("Apagado com sucesso")
      })
      
    },
    saveAnotation(value) {
      this.actSetAnotations(value);
      this.$q.notify({
        message: "Salvo no armazenamento local!",
        color: "green-4",
        textColor: "white",
        icon: "cloud_done"
      });
    }
  }
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
