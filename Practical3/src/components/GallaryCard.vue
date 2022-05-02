<template>
  <!-- <top-navagation @onFormSubmitHandler="saveFormdataHandler" :upcomingData ="this.filteredData"/> -->
  <NavagationBar
    @onFormSubmitHandler="saveFormdataHandler"
    :upcomingData="this.filteredData"
  />
  <div class="flex_container">
    <div v-for="car in carsDetails" :key="car.id">
      <VehicalCard
        :vehicalData="car"
        @deleteIteam="deleteClickHandler"
        @editIteam="editClickHandler"
      />
    </div>
    <!-- <CarForm/> -->
  </div>
</template>

<script>
import jsonData from "./Data/jsonData.json";
import VehicalCard from "./VehicalCard.vue";
import NavagationBar from "./NavagationBar.vue";
// import CarForm from "./CarForm.vue";

export default {
  name: "GallaryCard",
  components: {
    VehicalCard,
    NavagationBar,
    // CarForm
  },
  props: {
    formData: Object,
  },
  data() {
    return {
      carsDetails: jsonData,
      filteredData: null,
    };
  },
  methods: {
    clickHandler(price, heading) {
      alert("Car Name: ", heading, "\n", "Price is: ", price);
      console.log(this.carsDetails);
    },
    // --------------the emit used--------->
    deleteClickHandler(data) {
      // console.log("Iteam Id: ", data);
      let index = this.carsDetails.findIndex((item) => item.id === data);
      this.carsDetails.splice(index, 1);
    },
    editClickHandler(data) {
      // console.log("Iteam Id: ", data);
      let index = this.carsDetails.findIndex((item) => item.id === data);
      this.filteredData = this.carsDetails[index];
      console.log("Editing data: ", this.filteredData);
    },
    saveFormdataHandler(formData) {
      console.log("UpComing form data from navagation: ", JSON.parse(formData));
      this.carsDetails.push(JSON.parse(formData));
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
</style>
