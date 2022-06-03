<template>
  <div class="List_home">

    <div class="card main_container m" style="width: 22rem; min-height: 450px; max-height: 450px;">

      <router-link :to="{ name: 'Car', params: { id: vehicleData.id } }">
        <img class="card-img-top" :src="vehicleData.image" alt="Car image">
      </router-link>

      <div class="card-body h-20">
        <h5 class="card-title">
          <b><i>{{ vehicleData.name }}</i></b>
        </h5><br>
        <p class="card-text"> {{ vehicleData.details }} </p>
      </div>

      <div class="card-footer text-muted">
        <button v-if="vehicleData && vehicleData.price" @click="infoClickHandler(vehicleData.price, vehicleData.name)"
          class="btn btn-secondary mx-2 w-25">
          <i class="fa-solid fa-circle-info"></i>
        </button>

        <button v-else disabled class="disable_button">Available soon!</button>

        <button type="button" class="btn btn-success mx-2 w-25" @click="editClickHandler">
          <i class="fa-solid blue fa-pen-clip"></i>
        </button>

        <button class="btn btn-danger mx-2 w-25" @click="deleteClickHandler(vehicleData.id)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    vehicleData: Object,
  },
  methods: {
    infoClickHandler(price, name) {
      alert("Car Name: " + name + "\n" + "Price is: " + price);
    },

    deleteClickHandler(id) {
     const res= this.$store.dispatch(`form/deleteCarDetails`,id)
     res.then((res)=>{
       if (res.status === 204) {
         this.$toast.success('Delete was Successfull',{
           position: 'bottom-right',
           duration: 1000
         })
       }else{
         this.$toast.error('Canno\'t Delete Car',{
           position: 'bottom-right',
          duration: 2000
         })
       }

     })

    },

    editClickHandler() {
      const formDetails = {
        showForm: true,
        formHeading: "Edit Car",
        formAction: "edit",
        formInitialValue: {
          id: this.vehicleData.id,
          name: this.vehicleData.name,
          details: this.vehicleData.details,
          image: this.vehicleData.image,
          price: this.vehicleData.price,
        },
      };
      this.$store.dispatch(`form/setForm`,formDetails)
    },
  },
};
</script>

<style scoped>
.List_home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  max-width: 1000px;
}

.List_home:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
}

.main_container {
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

img {
  max-width: 360px;
  max-height: 240px;
}
</style>
