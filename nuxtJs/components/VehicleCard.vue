<template>
  <div class="List_home">

    <div class="card main_container">

      <div>
        <nuxt-link :to="`/gallery/${vehicleData.id}`">
          <img class="card-img-top" :src="vehicleData.image" alt="Car image">
        </nuxt-link>
      </div>

      <div class="card-body h-20">
        <h5 class="card-title">
          <b><i>{{ vehicleData.name }}</i></b>
        </h5><br>
        <p class="card-text scroll-on"> {{ vehicleData.details }} </p>
      </div>

      <div class="card-footer text-muted">
        <button v-if="vehicleData && vehicleData.price" @click="infoClickHandler()" class="btn btn-secondary mx-2 w-25">
          <i class="fa-solid fa-circle-info"></i>
        </button>

        <button v-else disabled class="disable_button">Available soon!</button>

        <button type="button" class="btn btn-success mx-2 w-25" @click="edicClickHandler">
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
  props: ['vehicleData'],

  methods: {
    infoClickHandler() {
      // alert("Car Name: " + this.vehicleData.name + "\n" + "Price is: " + this.vehicleData.price);
      this.$toast.info('Car Name: ' + this.vehicleData.name + '\n\n' + 'Price is: ' + this.vehicleData.price, {
        position: 'top',
        duration: 3000,
        fullWidth: true,
      });
    },

    deleteClickHandler(id) {
      const res = this.$store.dispatch(`deleteMyCar`, id)
      res.then((res) => {
        if (!res.message) {
          this.$toast.success('Delete was Successfull', {
            position: 'bottom-right',
            duration: 1000
          })
        } else {
          this.$toast.error('Canno\'t Delete Car', {
            position: 'bottom-right',
            duration: 2000
          })
        }

      })

    },

    edicClickHandler() {
      this.$store.dispatch('setForm', { showForm: true, formHeading: 'Add New Car', formAction: 'edit', formInitialValue: '', formInitialValue: this.vehicleData })
    }

    //   editClickHandler() {
    //     const formDetails = {
    //       showForm: true,
    //       formHeading: "Edit Car",
    //       formAction: "edit",
    //       formInitialValue: {
    //         id: this.vehicleData.id,
    //         name: this.vehicleData.name,
    //         details: this.vehicleData.details,
    //         image: this.vehicleData.image,
    //         price: this.vehicleData.price,
    //       },
    //     };
    //     this.$store.dispatch(`form/setForm`,formDetails)
    // },
  },
};
</script>

<style scoped>
.List_home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* max-width: 1000px; */
}

.List_home:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
}

.main_container {
  width: 22rem;
  min-height: 450px;
  max-height: 450px;
  /* overflow-y: auto; */
}

.scroll-on {
  overflow-y: auto;
  max-height: 100px;
}

::-webkit-scrollbar {
  /* width: 0; */
  /* background: transparent; */
}

img {
  max-width: 360px;
  max-height: 240px;
}
</style>
