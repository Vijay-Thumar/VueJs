<template>
  <div class="List-home">
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

      <button v-else disabled class="disable_button">Available soon!</button>

      <button
        class="edit_button"
        @click="editClickHandler(vehicalData.heading)"
      >
        Edit
      </button>
      <button
        class="delete_button"
        @click="deleteClickHandler(vehicalData.heading)"
      >
        Delete
      </button>
    </div>
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

<style scoped>
.edit_button {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: green;
  margin: 5px;
  color: #fff;
}
.edit_button:hover {
  background-color: green;
  border-radius: 15px;
  border-top: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  padding: 10px 25px;

  color: white;
  cursor: pointer;
}
.edit_button:active {
  background-color: green;
  border-radius: 15px;
  border-top: 1px solid darkgreen;
  border-top: 1px solid darkgreen;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
.delete_button {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: rgba(125, 27, 0, 0.974);
  margin: 5px;
  color: #fff;
}
.delete_button:hover {
  background-color: rgba(125, 27, 0, 0.974);
  border-radius: 15px;
  border-top: 2px solid rgba(102, 22, 0, 0.974);
  border-top: 2px solid rgba(102, 22, 0, 0.974);
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
.delete_button:active {
  background-color: rgba(125, 27, 0, 0.974);
  border-radius: 15px;
  border-top: 1px solid rgba(102, 22, 0, 0.974);
  border-top: 1px solid rgba(102, 22, 0, 0.974);
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
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
  max-width: 700px;
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
  margin: 5px;
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c6e;
  color: #fff;
}
</style>
