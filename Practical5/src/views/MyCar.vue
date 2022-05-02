<template>
  <div class="mycar_container">
    <div v-if="loading" class="d-flex p-5 justify-content-center">Loading...</div>
    <div v-if="apiError" class="d-flex p-5 justify-content-center"><h5>{{ apiError }}</h5></div>
    <div v-if="errorCode == 404 " class="d-flex p-5 justify-content-center"><h5> Car not found!!</h5></div>
    <div v-if="!apiError && !loading" class="sub_container">
      <p>
        <span class="label"> Car Name: </span>
        <span class="car_data">{{ myCar.name }}</span>
      </p>
      <img class="car_image" :src="myCar.image" />
      <div class="mycar_details">
        <span class="label">Car Details: </span>
        <span class="car_data">{{ myCar.details }}</span>
      </div>
      <p>
        <span class="label"> Price: </span>
        <span class="car_data"> {{ myCar.price }}</span>
      </p>
      <p>
        <span class="label">Created At: </span>
        <span class="car_data">{{ myCar.createdAt }}</span
        ><br />
        <span class="label">Updated At: </span>
        <span class="car_data">{{ myCar.updatedAt }}</span>
      </p>
      <button class="btn btn-primary" @click="goBackHandler">Go Back</button>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { object } from "yup";
export default {
  name: "MyCar",
  data() {
    return {
      id: this.$route.params.id,
      myCar: object,
      loading: true,
      apiError: false,
      errorCode: null,
    };
  },
  mounted() {
    this.fetchMyCar();
  },
  methods: {
    async fetchMyCar() {
      await axios
        .get(`https://testapi.io/api/dartya/resource/cardata/${this.id}`)
        .then((res) => {
          this.myCar = res.data;
          this.loading = false;
        })
        .catch((err) => {
          this.apiError = err;
          this.loading = false;
          this.errorCode = err.response.status
        });
    },
    goBackHandler() {
      this.$router.push("/gallery");
    },
  },
};
</script>

<style scoped>
.mycar_container {
  background-color: beige;
}
.sub_container {
  max-width: 900px;
  margin: auto auto;
}
.mycar_details {
  max-width: 90%;
  word-wrap: break-word;
  margin: auto auto;
}
.label {
  font-size: 28px;
  font-weight: bold;
}
.car_data {
  font-size: 24px;
  font-style: italic;
}
.car_image {
  max-width: 700px;
}
</style>
