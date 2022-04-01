<template>
  <top-navagation />
  <div class="flex_container">
    <div v-for="item in carsDetails" :key="item.id">
      <VehicalCard :vehicalData="item" />
    </div>
  </div>
</template>

<script>
import jsonData from "./Data/jsonData.json";
import VehicalCard from "./VehicalCard.vue";

export default {
  name: "GallaryCard",
  components: {
    VehicalCard,
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
