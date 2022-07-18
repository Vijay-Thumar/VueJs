<template>
    <div class="mycar_container">
        <div v-if="loading === 'loadingMyCar'" class="d-flex p-5 justify-content-center">Loading...</div>


        <div v-if="apiError && apiError.response.status == 404" class="d-flex p-5 justify-content-center">
            <h5> Car not found!!</h5>
        </div>

        <div v-if="apiError" class="d-flex p-5 justify-content-center">
            <details>
                <summary>Advance Detail About Error</summary><b>Api Response:</b> <br> {{ apiError }}
            </details>
        </div>

        <Transition name="fade" appear>
            <div v-if="!apiError && loading === 'showMyCar'" class="sub_container">
                <p>
                    <span class="label"> Car Name: </span>
                    <span class="car_data">{{ myCar.name }}</span>
                </p>
                <img class="car_image" :src="myCar.image" />
                <div class="mycar_details">
                    <span class="label">Car Details: </span>
                    <span class="car_data">{{ myCar.details }}</span>
                </div>
                <p>
                    <span class="label"> Price: </span>
                    <span class="car_data"> {{ myCar.price }}</span>
                </p>
                <p>
                    <span class="label">Created At: </span>
                    <span class="car_data">{{ myCar.createdAt }}</span><br />
                    <span class="label">Updated At: </span>
                    <span class="car_data">{{ myCar.updatedAt }}</span>
                </p>
                <!-- <button class="btn btn-primary" @click="goBackHandler">Go Back</button> -->
            </div>
        </Transition>

        <br>
        <button class="btn btn-primary" @click="goBackHandler">Go Back</button>
        <br />
        <br />
        <br />
    </div>
</template>

<script>
import global from '~/mixins/global';
export default {
    mixins: [global],
    middleware: ['auth'],
    created() {
        this.$store.dispatch("fetchMyCar", this.$route.params.id);
    },
    computed: {
        myCar() {
            return this.$store.state.allCars
        },
    },
    methods: {
        goBackHandler() {
            this.$router.push('/gallery')
        }
    },
}
</script>

<style scoped>
.mycar_container {
    text-align: center;
    background-color: beige;
}

.sub_container {
    max-width: 900px;
    margin: auto auto;
}

.mycar_details {
    max-width: 90%;
    word-wrap: break-word;
    margin: auto auto;
}

.label {
    font-size: 28px;
    font-weight: bold;
}

.car_data {
    font-size: 24px;
    font-style: italic;
}

.car_image {
    max-width: 700px;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
