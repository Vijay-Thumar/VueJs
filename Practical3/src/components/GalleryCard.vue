<template>
  <div>
    <AddCarForm @onFormSubmitHandler="saveFormdataHandler" />
    <div class="flex_container">
      <CarForm
        @editedIteam="editedClickHandler"
        :formVisibility="showForm"
        :sd="filteredData"
        @formHandlerData="closeFormHandler"
      />
      <div v-for="car in carsDetails" :key="car.id">
        <VehicalCard
          :vehicalData="car"
          @deleteIteam="deleteClickHandler"
          @vehicalId="vehicalEditClickHandler"
          :formHandeler="showForm"
        />
      </div>
      <div class="data_error">
        {{ carsDetails.length === 0 ? "No data available" : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data/jsonData.json";
import VehicalCard from "./VehicalCard.vue";
import CarForm from "./CarForm.vue";
import AddCarForm from "./AddCarForm.vue";

export default {
  components: {
    VehicalCard,
    CarForm,
    AddCarForm,
  },
  data() {
    return {
      carsDetails: jsonData,
      filteredData: null,
      editingIndex: null,
      showForm: null,
    };
  },
  methods: {
    clickHandler(price, heading) {
      alert("Car Name: ", heading, "\n", "Price is: ", price);
    },
    deleteClickHandler(data) {
      let index = this.carsDetails.findIndex((item) => item.id === data);
      this.carsDetails.splice(index, 1);
    },
    saveFormdataHandler(formData) {
      this.carsDetails.push(JSON.parse(formData));
    },
    vehicalEditClickHandler(data, formStatus) {
      let index = this.carsDetails.findIndex((item) => item.id === data);
      this.editingIndex = index;
      this.filteredData = this.carsDetails[index];
      this.showForm = formStatus;
    },
    editedClickHandler(edata) {
      this.carsDetails[this.editingIndex] = edata;
    },
    closeFormHandler(data) {
      this.showForm = data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.data_error {
  color: red;
  font-size: 20px;
  font-weight: bolder;
  padding: 10px;
}
</style>
