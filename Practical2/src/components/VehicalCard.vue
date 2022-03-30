<template>
  <div>
    This is Vehical Card Component
    <h2>{{ item.heading }}</h2>

    <div><img :src="item.image" alt="image of car" /></div>

    <h4>{{ item.details }}</h4>

    <div>
      <h4>{{ item.specs }}</h4>
    </div>

    <button v-if="item.price" @click="clickHandler(item.price, item.heading)" class="info_btn"
>
      info
    </button>
    <button v-else disabled class="disable_button">Available soon!</button>
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
.main_container {
  background-color: burlywood;
  padding: 50px;
  max-width: 400px;
  margin: 10px;
  border-radius: 50px;
}
</style>
