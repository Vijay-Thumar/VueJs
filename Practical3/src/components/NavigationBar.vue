<template>
  <div class="Navigation_bar">
    <div>Car gallery</div>
    <div>

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AddCarForm">
        Add Car
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
.modal-body input {
  border-radius: 15px;
  background-color: rgb(222, 222, 222);
  border: 1px solid gray;
  padding: 5px;
  margin: 6px;
}

.Navigation_bar {
  min-width: 80%;
  background-color: rgb(84, 121, 241);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
  border-radius: 50px;
  padding: 0 80px;
}

.add_button {
  background-color: green;
  border-radius: 25px;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}

.add_button:hover {
  background-color: green;
  border-radius: 25px;
  border-top: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}

.add_button:active {
  background-color: green;
  border-radius: 25px;
  border-top: 1px solid darkgreen;
  border-top: 1px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}

label {
  font-size: 16px;
  float: left;
  margin-left: 8px;
}
</style>