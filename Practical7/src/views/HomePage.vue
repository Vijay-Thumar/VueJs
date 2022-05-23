<template>
  <div>
    <NavigationBar />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <Component :is="Component"></Component>
      </transition>
    </router-view>
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

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translatey(-10px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 1;
  transform: translatey(5px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}
</style>