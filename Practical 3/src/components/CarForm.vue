<template>
  <form>
    <input v-model="heading" placeholder="Enter Heading" /><br />
    <input v-model="details" placeholder="Enter Details" /><br />
    <input v-model="image" placeholder="Enter Image Url" /><br />
    <input v-model="price" placeholder="Enter Price of car" /><br />
    <button type="submit" @click="formSubmitHandler">Submit</button><br />
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
  methods: {
    formSubmitHandler(e) {
      e.preventDefault();
      console.log("Form Submitted");
      console.log(this.heading);
      console.log(this.details);
      console.log(this.image);
      console.log(this.price);
    },
  },
};
</script>

<style>
input {
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgb(154, 154, 154);
}
button {
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgb(74, 74, 74);
}
</style>
