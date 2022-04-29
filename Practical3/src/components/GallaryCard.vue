<template>
  <top-navagation />
  <div class="flex_container">
    <div v-for="car in carsDetails" :key="car.id">
      <VehicalCard
        :vehicalData="car"
        @deleteIteam="deleteClickHandler"
      />
    </div>
  </div>
  <!-- <CarForm /> -->
</template>

<script>
import jsonData from "./Data/jsonData.json";
import VehicalCard from "./VehicalCard.vue";
// import CarForm from "./CarForm.vue";

export default {
  name: "GallaryCard",
  components: {
    VehicalCard,
    // CarForm,
  },
  data() {
    return {
      carsDetails: jsonData,
    };
  },
  methods: {
    clickHandler(price, heading) {
      alert("Car Name: " + heading + "\n" + "Price is: " + price);
    },
    // --------------the emit used--------->
    deleteClickHandler(data) {
      console.log("This is the id of iteam: " + data);
      let specialIndex = this.carsDetails.findIndex( item => item.heading === data);
      this.carsDetails.splice(specialIndex, 1);
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
}
</style>
