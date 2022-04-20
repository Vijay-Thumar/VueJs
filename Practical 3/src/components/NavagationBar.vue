<template>
  <div class="Navagation_bar">
    <div>Navagation bar from navagation</div>
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      class="add_button"
      @click="addClickHandler"
    >
      Add Car
    </button>
  </div>
</template>

<script>
import CarForm from "./CarForm.vue";

export default {
  data() {
    return {};
  },
  component: {
    CarForm,
  },
  methods: {
    addClickHandler() {
      console.log("Add button clicked");
    },
  },
};
</script>

<style scoped>
.Navagation_bar {
  min-width: 80%;
  background-color: rgb(84, 121, 241);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-radius: 50px;
  padding: 0 80px;
}
.add_button {
  background-color: green;
  border-radius: 25px;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}
.add_button:hover {
  background-color: green;
  border-radius: 25px;
  border-top: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}
.add_button:active {
  background-color: green;
  border-radius: 25px;
  border-top: 1px solid darkgreen;
  border-top: 1px solid darkgreen;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}
</style>
