<template>
  <div>
    <Suspense>
      <template #default>
        <AddCarForm @onFormSubmitHandler="saveFormdataHandler" />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
    <div class="flex_container">
      <Suspense>
        <template #default>
          <CarForm
            @editedIteam="editedClickHandler"
            :formVisibility="showForm"
            :sd="this.filteredData"
            @formHandlerData="closeFormHandler"
          />
        </template>
        <template #fallback> Loading... </template>
      </Suspense>

      <!-- <button @click="showthecomponentHandler">
        Click to load new component
      </button>
      <Suspense v-if="showthecomponent">
        <template #default> <NewComponent /> </template>
        <template #fallback> Loading..</template>
        </Suspense> -->

      <div v-show="!apiError" v-for="car in carsDetails" :key="car.id">
        <VehicleCard
          :vehicleData="car"
          @deleteIteam="deleteClickHandler"
          @vehicleId="vehicleEditClickHandler"
          :formHandeler="showForm"
        />
      </div>

      <div v-if="loading" class="data_error">Data is loading...</div>
      <div
        v-if="!apiError && carsDetails.length === 0 && !loading"
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
import VehicleCard from "./VehicleCard.vue";
import axios from "axios";

// import AddCarForm from "./AddCarForm.vue";
// import CarForm from "./CarForm.vue"; // The normal import
import { defineAsyncComponent } from "vue";
const CarForm = defineAsyncComponent(() => import("./CarForm.vue")); // The lazy import
const AddCarForm = defineAsyncComponent(() => import("./AddCarForm.vue")); // The lazy import
// const NewComponent = defineAsyncComponent(() => import("./NewComponent.vue"));

export default {
  name: "GalleryCard",
  components: {
    VehicleCard,
    CarForm,
    AddCarForm,
    // NewComponent,
  },
  data() {
    return {
      carsDetails: jsonData,
      filteredData: null,
      editingIndex: null,
      showForm: null,
      apiError: null,
      vehicleID: null,
      loading: true,
      showthecomponent: false,
    };
  },
  mounted() {
    this.carsDetails = [];
    this.fatchCarDetails();
  },
  methods: {
    showthecomponentHandler() {
      this.showthecomponent = true;
    },
    async fatchCarDetails() {
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
            this.fatchCarDetails();
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
            this.fatchCarDetails();
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
            this.fatchCarDetails();
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
    deleteClickHandler(data) {
      this.deleteCarDetails(data);
    },
    saveFormdataHandler(formData) {
      this.carsDetails.push(JSON.parse(formData));
      this.postCarDetails(JSON.parse(formData));
    },
    vehicleEditClickHandler(vid, formStatus) {
      let index = this.carsDetails.findIndex((item) => item.id === vid);
      this.vehicleID = vid;
      this.editingIndex = index;
      this.filteredData = this.carsDetails[index];
      this.showForm = formStatus;
    },
    editedClickHandler(edata) {
      this.carsDetails[this.editingIndex] = edata;
      this.editCarDetails(this.vehicleID, edata);
    },
    closeFormHandler(data) {
      this.showForm = data;
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
</style>
