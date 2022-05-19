<template>
  <div>
    <NavigationBar />
    <GalleryCard />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import GalleryCard from "../components/GalleryCard.vue";
export default {
  components: {
    NavigationBar,
    GalleryCard,
  },
};
</script>
