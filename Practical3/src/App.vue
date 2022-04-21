<template>
  <div style="background-color: white; color: black">
    <Homecomponent />
  </div>
</template>

<script>
import Homecomponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    Homecomponent,
  },
};
</script>
