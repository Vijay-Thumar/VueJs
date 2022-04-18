<template>
  <form>
    <input v-model="heading" placeholder="Enter Heading" />
    <input v-model="details" placeholder="Enter Details" />
    <input v-model="image" placeholder="Enter Image Url" />
    <input v-model="price" placeholder="Enter Price of car" />
    <button type="submit" @click="formSubmitHandler">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      heading: null,
      details: null,
      image: null,
      price: null,
    };
  },
  methods(){
      formSubmitHandler(e){}
  },
};
</script>

<style></style>
