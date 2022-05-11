<template>
<div>
    <NavigationBar/>
    <GalleryCard/>
</div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";
import NavigationBar from "./NavigationBar.vue";
export default{
    components: {
    GalleryCard,
    NavigationBar
},
}
</script>