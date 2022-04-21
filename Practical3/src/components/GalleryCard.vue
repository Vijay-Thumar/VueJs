<script>
import CarData from "../Data/CarData";

export default {
  name: "GalleryCard",
  props: ["cardId", "carTitle", "carImage", "cardetails", "price"],
  data() {
    return {
      cars: CarData,
    };
  },
  methods: {
    showDeleteCar: function () {
      alert(`Delete car sucessfully ` + this.carTitle + "!!!");
    },
  },
};
</script>

<template>
  <b-col
    cols="3"
    class="d-flex align-items-stretch ms-5 me-2 justify-between-center user-select-none"
  >
    <b-card
      class="mt-5 shadow mb-3 rounded"
      header-tag="header"
      style="background-color: rgb(230, 211, 247); max-width: 100em"
      align="center"
      :title="carTitle"
    >
      <b-img
        style="width: 250px; height: 10rem"
        :src="carImage"
        alt="Fluid-grow image"
      ></b-img>
      <b-card-text class="mt-4 mb-5">{{ cardetails }}</b-card-text>
      <b-button
        v-on:click="showDeleteCar()"
        style="background-color: red"
        class="shadow-lg border-none position-absolute bottom-0 start-0 ms-5 mb-3 mr-2 button-center"
        v-if="price != null"
        
      >
        delete
      </b-button>
      <b-button
        style="background-color: #50302c"
        class="shadow-lg border-none position-absolute bottom-0 translate-middle"
        @click="$emit('CarPrice', price)"
        v-if="price != null"
      >
        Info
      </b-button>
      <b-button
        style="background-color: #50302c6e"
        class="shadow-lg border-none position-absolute bottom-0 ms-1 mb-3 button-center"
        disabled
        v-else
      >
        available soon...
      </b-button>
      <b-button
        style="background-color: green"
        v-b-modal.modal-prevent-closing
        class="shadow-lg border-none position-absolute bottom-0 end-0 mb-3 me-2"
        v-b-modal="'modal-prevent-closing' + cardId"
        @click="$emit('editCard')"
        v-if="price != null"
      >
        edit
      </b-button>
    </b-card>
  </b-col>
</template>
<style>
.button-center {
  transform: translateX(-50%);
}
</style>
