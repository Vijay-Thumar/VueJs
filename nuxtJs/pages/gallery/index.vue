<template>
    <div>
        <CarForm />
        <div v-if="loading == 'start_loading_allcar'">...loading</div>
        <Transition name="fade" appear>
            <div class="d-flex flex-wrap">
                <div v-for="(car, index) in carsDetails" :key="car.id" :data-index="index">
                    <VehicleCard :vehicleData="car" style="margin: 22px;" />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import VehicleCard from '../../components/VehicleCard.vue';
import CarForm from '../../components/CarForm.vue';
import global from '~/mixins/global.js'
export default {
    mixins: [global],
    middleware: ['auth'],
    created() {
        this.$store.dispatch("fetchCarDetails");
    },
    computed: {
        carsDetails() {
            return this.$store.state.allCars
        },
    },
    components: { VehicleCard, CarForm }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>