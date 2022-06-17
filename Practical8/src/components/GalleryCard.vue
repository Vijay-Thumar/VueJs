<template>
	<div>
		<CarForm />
		<div class="flex_container">
			<transition-group appear tag="" @before-enter="beforeEnter" @enter="enter">
				<div v-show="!apiError" v-for="(car, index) in carsDetails" :key="car.id" :data-index="index" >
					<VehicleCard :vehicleData="car" style="margin: 22px;"/>
				</div>
			</transition-group>

			<div v-if="loading" class="data_error">Data is loading...</div>

			<div v-if="!loading && carsDetails.length === 0 && !apiError" class="data_error">
				There is no car data. Please add car to see the result.
			</div>

			<div v-if="apiError" class="data_error">
				It’s not you. It’s us. Give it another try after sometime 😔. <br />{{
						apiError
				}}
			</div>
		</div>
	</div>
</template>

<script>
import gsap from "gsap";
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
const CarForm = defineAsyncComponent(() => import(/* webpackChunkName: "addEditCarFormComponent" */ "./CarForm.vue"));
const VehicleCard = defineAsyncComponent(() => import(/* webpackChunkName: "vehicleCardComponent" */ "./VehicleCard.vue"));

export default {
	name: "GalleryCard",
	setup() {
		const beforeEnter = (el) => {
			el.style.opacity = 0;
			el.style.transform = "translateX(100px)";
		};
		const enter = (el, done) => {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				onComplete: done,
				delay: el.dataset.index * 0.4,
			});
		};
		return {
			beforeEnter,
			enter,
		};
	},
	components: {
		VehicleCard,
		CarForm,
	},
	mounted() {
		this.$store.dispatch(`form/fetchCarDetails`);
	},
	computed: {
		...mapGetters({
			carsDetails: `form/getCars`,
			loading: `form/getLoading`,
			apiError: `form/getApiError`
		}),
	},
};
</script>

<style scoped>
.flex_container {
	display: flex;
	flex-wrap: wrap;
}

.data_error {
	display: flex;
	align-items: center;
	justify-content: center;
	color: red;
	font-size: 20px;
	font-weight: bolder;
	padding: 10px;
	min-height: 600px;
	min-width: 800px;
}
</style>
