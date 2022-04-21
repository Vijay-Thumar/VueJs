 <template>
  <header
    class="pt-2 pb-2"
    style="border-bottom: 2px solid #1f2a48"
  >
    <h1 class="text-center">
      {{ showRoomName }}
      <b-button
        v-b-modal.modal-prevent-closing
        style="background-color: darkcyan"
        class="shadow-lg border-none bottom-0 start-0 ms-5 button-center"
        >Add Car</b-button
      >
    </h1>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showRoomName: "Car Showroom",
    };
  },
};
</script>
