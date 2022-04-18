<template>
  <div class="Navagation_bar">
    <div>Navagation bar from navagation</div>
      <div class="add_button" @click="addButtonHandler"> Add </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.Navagation_bar {
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
.add_button{
  background-color: green;
  border-radius: 25px;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
.add_button:hover{
  background-color: green;
  border-radius: 25px;
  border-top:2px solid darkgreen;
  border-top:2px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
.add_button:active {
  background-color: green;
  border-radius: 25px;
  border-top:1px solid darkgreen;
  border-top:1px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
</style>
