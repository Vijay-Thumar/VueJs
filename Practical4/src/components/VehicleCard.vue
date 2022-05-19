<template>
  <div class="List_home">
    <div class="main_container">
      <h2>{{ vehicleData.name }}</h2>

      <div><img :src="vehicleData.image" alt="image of car" /></div>

      <div>
        <div class="car_data">{{ vehicleData.details }}</div>
      </div>
      <div>
        <div class="car_data">{{ vehicleData.specs }}</div>
      </div>

      <button
        v-if="vehicleData.price"
        @click="infoClickHandler(vehicleData.price, vehicleData.name)"
        class="info_btn"
      >
        info
      </button>

      <button v-else disabled class="disable_button">Available soon!</button>

      <button
        type="button"
        data-toggle="modal"
        data-target="#editModal"
        class="edit_button"
        @click="editClickHandler"
      >
        Edit
      </button>

      <button class="delete_button" @click="deleteClickHandler">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vehicleData: Object,
    formHandeler: Boolean,
  },
  data() {
    return {
      showForm: this.formHandeler,
    };
  },
  methods: {
    infoClickHandler(price, name) {
      alert("Car Name: " + name + "\n" + "Price is: " + price);
    },
    deleteClickHandler() {
      this.$emit("DeleteIteam", this.vehicleData.id);
    },
    editClickHandler() {
      this.$emit("vehicleId", this.vehicleData.id, (this.showForm = true));
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
  /* max-width: 500px; */
  min-width: 500px;
  min-height: 500px;
  /* max-height: 500px; */
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

.List_home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  max-width: 1000px;
}

.disable_button {
  margin: 5px;
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c6e;
  color: #fff;
}
.car_data {
  font-size: 24px;
  word-wrap: break-word;
  max-width: 400px;
}
</style>
