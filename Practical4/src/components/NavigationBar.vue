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
  .Navigation_bar {
    min-width: 80%;
    background-color: rgb(84, 197, 241);
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: x-large;
    font-weight: 600;
    border-radius: 50px;
    padding: 0 80px;
    margin-top: 5px;
  }
</style>