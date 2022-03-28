<template>
  <center>
    <div v-for="item in fulldata" :key="item.id" class="main_container">
      <h2>{{ item.heading }}</h2>

      <div class="hola_image"><img :src="item.image" alt="image of car" /></div>

      <h3 class="details_container">{{ item.details }}</h3>

      <div>
        <h3 class="details_container">{{ item.specs }}</h3>
      </div>

      <button @click="clickHandler(item.price, item.heading)" class="info_btn">
        info
      </button>
    </div>
  </center>
</template>

<script>
import jsonData from "./jsonData.json";

export default {
  name: "GallaryCard",
  data() {
    return {
      fulldata: jsonData,
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
h3 {
  margin: 40px 0 0;
}

.btn {
  border-radius: 15px;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
}
.main_container {
  background-color: burlywood;
  padding: 50px;
  max-width: 400px;
  margin: 10px;
}
.info_btn {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c;
  color: #fff;
}
img {
  max-width: 400px;
}
</style>
