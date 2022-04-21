<template>
  <div class="container">
    <NavBar />
    <b-row class>
      <GalleryCard
        v-for="car in cars"
        :key="car.id"
        :cardId="car.id"
        :carTitle="car.heading"
        :carImage="car.image"
        :cardetails="car.details"
        :price="car.price"
        @CarPrice="CarPrice"
        @editCard="editCard(car)"
      />

      <FormModal
        :formData="selectedCardData"
        @submittedFormData="handleSubmittedData"
      />
    </b-row>
  </div>
</template>

<script>
import NavBar from "./Navbar.vue";
import GalleryCard from "./GalleryCard.vue";
import FormModal from "./Form-Modal.vue";
import CarData from "../Data/CarData.json";
export default {
  name: "HomeComponent",
  components: {
    NavBar,
    GalleryCard,
    FormModal,
  },
  props: ["modalId"],
  data() {
    return {
      cars: CarData,
      formModalId: this.modalId,
      selectedCardData: {
        carId: "",
        carName: "",
        carDetails: "",
        carPrice: "",
        carImgURL: "",
      },
      submittedNames: [],
    };
  },

  methods: {
    CarPrice(price) {
      alert(`Car Price : ${price}`);
    },
    editCard(car) {
      this.selectedCardData = {
        carId: car.id,
        carName: car.heading,
        carDetails: car.details,
        carPrice: car.price,
        carImgURL: car.image,
      };

      this.$bvModal.show("modal-prevent-closing");
      console.log(car);
    },
    handleSubmittedData(carItem) {
      if (carItem.carId !== "") {
        let id = carItem.carId;
        let i = this.cars.findIndex((item) => item.id === id);
        this.cars[i].heading = carItem.carName;
        this.cars[i].image = carItem.carImgURL;
        this.cars[i].details = carItem.carDetails;
        this.cars[i].price = carItem.carPrice;
        this.selectedCardData.carId = "";
        (this.selectedCardData.carName = ""),
          (this.selectedCardData.carDetails = ""),
          (this.selectedCardData.carPrice = ""),
          (this.selectedCardData.carImgURL = "");
      } else {
        let carsItem = {
          id: Math.random().toString(),
          heading: carItem.carName,
          image: carItem.carImgURL,
          details: carItem.carDetails,
          price: carItem.carPrice,
        };
        this.cars.push(carsItem);
      }
    },
  },
};
</script>
