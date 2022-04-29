<template>
  <div>
    <AddCarForm @onFormSubmitHandler="saveFormdataHandler" />
    <div class="flex_container">
      <CarForm
        @editedIteam="editedClickHandler"
        :formVisibility="showForm"
        :sd="this.filteredData"
        @formHandlerData="closeFormHandler"
      />

      <div v-show="!apiError" v-for="car in carsDetails" :key="car.id">
        <VehicleCard
          :vehicleData="car"
          @deleteIteam="deleteClickHandler"
          @vehicleId="vehicleEditClickHandler"
          :formHandeler="showForm"
        />
      </div>
      <div v-if="loading" class="data_error">Data is loading...</div>
      <div v-if="apiError || carsDetails.length === 0" class="data_error">
        <div v-if="!apiError">
          {{
            carsDetails.length === 0
              ? "There is no car data. Please add car to see the result."
              : ""
          }}
        </div>
        <br />
        <div v-if="apiError">
          It’s not you. It’s us. Give it another try after sometime 😔. <br />
          {{ apiError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data/jsonData.json";
import VehicleCard from "./VehicleCard.vue";
import CarForm from "./CarForm.vue";
import axios from "axios";
import AddCarForm from "./AddCarForm.vue";

export default {
  name: "GalleryCard",
  components: {
    VehicleCard,
    CarForm,
    AddCarForm,
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
    };
  },
  mounted() {
    this.carsDetails = [];
    this.fatchCarDetails();
  },
  methods: {
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
