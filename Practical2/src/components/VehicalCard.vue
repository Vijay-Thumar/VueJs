<template>
  <div class="List-home">
    <!-- <div v-for="item in fulldata" :key="item.id" class="main_container"> -->
    <div class="main_container">
      <h2>{{ vehicalData.heading }}</h2>

      <div><img :src="vehicalData.image" alt="image of car" /></div>

      <h4>{{ vehicalData.details }}</h4>

      <div>
        <h4>{{ vehicalData.specs }}</h4>
      </div>

      <button
        v-if="vehicalData.price"
        @click="clickHandler(vehicalData.price, vehicalData.heading)"
        class="info_btn"
      >
        info
      </button>

      <!-- <h1 v-else>Oh no :(</h1> -->

      <button v-else disabled class="disable_button">Available soon!</button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    vehicalData: Object,
  },
  data() {
    return {};
  },
  methods: {
    clickHandler(price, heading) {
      alert("Car Name: " + heading + "\n" + "Price is: " + price);
    },
  },
};
</script>

<style>
h4 {
  margin: 40px 0 0;
}

.btn {
  border-radius: 15px;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
}
.main_container {
  background-color: rgb(230, 211, 247);
  padding: 50px;
  max-width: 400px;
  min-height: 628px;
  margin: 10px;
  border-radius: 50px;
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
.List-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
}
.disable_button {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c6e;
  color: #fff;
}
</style>
