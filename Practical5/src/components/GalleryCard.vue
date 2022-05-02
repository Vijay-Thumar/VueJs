<template>
  <div>
    <div class="add_car">
      <button
        class="btn btn-primary rounded-pill"
        @click="
          formVisibilityHandler(true),
            formHeadingHandler('Add Car'),
            resetInitialValue(),
            formActionHandler('add')
        "
      >
        Add new car
      </button>
    </div>
    <CarForm
      :formHeading="formHeading"
      :initialValues="initialValues"
      :formSubmitHandler="formSubmitHandler"
      :formVisibility="formVisibility"
      :formVisibilityHandler="formVisibilityHandler"
      :formActionHandler="formActionHandler"
    />
    <div class="flex_container">
      <div v-show="!apiError" v-for="car in carsDetails" :key="car.id">
        <VehicleCard
          :formHeadingChange="formHeadingHandler"
          :vehicleData="car"
          :editCarHandler="editCarHandler"
          @deleteIteam="deleteClickHandler"
          :formVisibilityHandler="formVisibilityHandler"
          :formActionHandler="formActionHandler"
        />
      </div>
      <div v-if="loading" class="data_error">Data is loading...</div>
      <div
        v-if="!loading && carsDetails.length === 0 && !apiError"
        class="data_error"
      >
        {{
          carsDetails.length === 0
            ? "There is no car data. Please add car to see the result."
            : ""
        }}
      </div>
      <div v-if="apiError" class="data_error">
        It’s not you. It’s us. Give it another try after sometime 😔. <br />
        {{ apiError }}
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data/jsonData.json";
import axios from "axios";
import { defineAsyncComponent } from "vue";
const CarForm = defineAsyncComponent(()=> import(/* webpackChunkName: "addEditCarFormComponent" */'./CarForm.vue'))
const VehicleCard = defineAsyncComponent(()=> import(/* webpackChunkName: "vehicleCardComponent" */'./VehicleCard.vue'))

export default {
  name: "GalleryCard",
  components: {
    VehicleCard,
    CarForm,
  },
  data() {
    return {
      carsDetails: jsonData,
      formVisibility: false,
      apiError: null,
      loading: true,
      formHeading: null,
      formAction: "",
      initialValues: {
        id: 0,
        name: "",
        details: "",
        image: "",
        price: null,
      },
    };
  },
  mounted() {
    this.fetchCarDetails();
    let localData = JSON.parse(localStorage.getItem("userAuth"));
    if (localData == false) {
      this.$router.push("/");
    }
  },
  methods: {
    formActionHandler(action) {
      this.formAction = action;
    },
    formVisibilityHandler(visibility) {
      this.formVisibility = visibility;
    },
    async fetchCarDetails() {
      await axios
        .get("https://testapi.io/api/dartya/resource/cardata")
        .then((res) => {
          this.carsDetails = res.data.data;
          this.loading = false;
        })
        .catch((err) => {
          this.apiError = err;
          this.loading = false;
        });
    },
    postCarDetails(formvalues) {
      axios
        .post("https://testapi.io/api/dartya/resource/cardata", formvalues)
        .then((res) => {
          if (res.status === 201) {
            this.fetchCarDetails();
          }
        })
        .catch((err) => {
          alert(err);
          this.apiError = err;
          this.loading = false;
        });
    },
    deleteCarDetails(id) {
      axios
        .delete(`https://testapi.io/api/dartya/resource/cardata/${id}`)
        .then((res) => {
          if (res.status === 204) {
            this.fetchCarDetails();
          }
        })
        .catch((err) => {
          alert("can't delete at this moment" + err);
          this.loading = false;
        });
    },
    editCarDetails(id, data) {
      axios
        .put(`https://testapi.io/api/dartya/resource/cardata/${id}`, data)
        .then((res) => {
          if (res.status === 200) {
            this.fetchCarDetails();
          }
        })
        .catch((err) => {
          alert(`cannot update at this moment` + err);
          this.loading = false;
        });
    },
    clickHandler(price, name) {
      alert("Car Name: ", name, "\n", "Price is: ", price);
    },
    editCarHandler(id) {
      const uniqueCar = this.carsDetails.find((car) => car.id === id);
      this.initialValues = uniqueCar;
    },
    resetInitialValue() {
      this.initialValues = {
        id: 0,
        name: "",
        details: "",
        image: "",
        price: null,
      };
    },
    deleteClickHandler(data) {
      this.deleteCarDetails(data);
    },
    formHeadingHandler(heading) {
      this.formHeading = heading;
    },
    formSubmitHandler(values) {
      if (this.formAction === 'add' && this.formAction !== 'edit') {
        this.postCarDetails(values);
      } else {
        this.editCarDetails(values.id, values);
      }
    },
  },
};
</script>

<style scoped>
.flex_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.data_error {
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 20px;
  font-weight: bolder;
  padding: 10px;
  min-height: 600px;
  min-width: 800px;
}
.add_car {
  z-index: 1072;
  position: fixed;
  float: left;
  margin: 5px;
  top: 7%;
}
</style>
