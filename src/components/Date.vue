<template>
  <div class="q-pa-md q-gutter-sm">
<h3 class="title-date q-ma-none">{{title}}: <small>{{model}}</small></h3>
      <q-date
        class="full-width"
        v-model="model"
        :locale="myLocale"
        mask="DD/MM/YYYY"
      >
        <q-btn
          class="full-width"
          color="white"
          label="Salvar"
          text-color="black"
          @click="setNewDate"
        />
      </q-date>
  </div>
</template>

<script>
import moment from "moment-timezone";
export default {
  name: "DateComponent",
  props: {
    title: {
      type: [String],
      default: "Escolha a data"
    }
  },
  data: () => ({
    model: moment().format("DD/MM/YYYY"),
    myLocale: {}
  }),

  created() {
    this.onInit();
  },
  methods: {
    setNewDate() {
      this.$emit("newDate", this.model);
    },
    onInit() {
      const dayOfWeek = {
        fullName: [
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado"
        ]
      }
      const months = {
        fullName: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ]
      }
      const myLocale = {
        firstDayOfWeek: 0,
        months: months.fullName,
        monthsShort: months.fullName.map(item => item.slice(0, 3)),
        days: dayOfWeek.fullName,
        daysShort: dayOfWeek.fullName.map(item => item.slice(0, 3))
      }
      this.myLocale = myLocale
    }
  }
};
</script>
<style scoped>
.title-date{
  font-size: 2em;
  line-height: 3rem;
}
</style>
