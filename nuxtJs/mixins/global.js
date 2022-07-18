export default{
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    apiError() {
      return this.$store.state.apiError;
    },
  },
}
