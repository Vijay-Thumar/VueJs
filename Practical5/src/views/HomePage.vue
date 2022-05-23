<template>
  <div>
    <NavigationBar @onFormSubmitHandler="saveFormdataHandler" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from /* webpackChunkName: "navigationComponent" */"../components/NavigationBar.vue";
export default {
  name: "HomePage",
  components: {
    NavigationBar,
  },
  data() {
    return {
      formData: null,
    };
  },
  methods: {
    saveFormdataHandler(formData) {
      this.formData = formData;
    },
  },
};
</script>
