<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Enter car Detail"
      hide-footer="true"
      @hide="onHideHandler"
    >
      <CarForm
        modalId="modal-prevent-closing"
        :formData="$props"
        v-on="$listeners"
      />
    </b-modal>
  </div>
</template>

<script>
import CarForm from "./CarForm.vue";

export default {
  components: { CarForm },
  props: ["formData"],
  data() {
    return {
      name: "FormModal",
    };
  },
  methods: {
    onHideHandler() {
      this.$parent.selectedCardData = {
        carId: "",
        carTitle: "",
        cardetails: "",
        carPrice: "",
        carImage: "",
      };
    },
  },
};
</script>
