<template>
    <div class="navigation_bar">
        <nuxt-link to="/gallery">
            <transition name="fade" appear>
                <div v-if="false"> Welcome: {{ authUserName }}</div>
                <div v-else>The VueJS</div>
            </transition>
        </nuxt-link>

        <div class="navigation">

            <nav>
                <transition name="fade" appear mode="out-in">
                    <span v-if="!isUserLoged">
                        <nuxt-link to="/login">Login</nuxt-link>
                        <nuxt-link to="/signup">Signup</nuxt-link>
                    </span>
                    <span v-else>
                        <nuxt-link to="/gallery">Gallery</nuxt-link>
                    </span>
                </transition>
            </nav>
        </div>

        <div class="d-flex">
            <div>
                <transition appear>
                    <span v-if="isUserLoged" style="min-width: 120px; display: block" class="add_car">
                        <button class="btn btn-primary rounded-pill" :disabled="this.$store.state.formDetails.showForm"
                            @click="addCarClickHandler">
                            Add new car
                        </button>
                    </span>
                    <span v-else style="min-width: 120px; display: block">
                        &NonBreakingSpace;
                    </span>
                </transition>
            </div>

            <div>
                <transition appear>
                    <button v-if="isUserLoged" class="btn btn-secondary rounded-pill" @click="logoutHandler">
                        LogOut
                    </button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addCarClickHandler() {
            this.$store.dispatch('setForm', { showForm: true, formHeading: 'Add New Car', formAction: 'add', formInitialValue: '' })
        },
        logoutHandler() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    },
    computed: {
        isUserLoged() {
            return this.$store.getters.getIsAuth
        },
        isAuth() {
            return this.$store.getters.getIsAuth
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}

.navigation_bar {
    min-width: 100%;
    background-color: rgb(84, 197, 241);
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: x-large;
    font-weight: 600;
    /* border-radius: 50px; */
    padding: 0 80px;
}

.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
}

.navigation a {
    color: rgb(141, 141, 141);
    text-decoration: none;
    margin-left: 20px;
}

.navigation a.nuxt-link-active {
    color: rgb(26, 26, 26);
    font-weight: bold;
}

.navigation a:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
}

.another_buttons {
    color: rgb(141, 141, 141);
    text-decoration: none;
    margin-left: 20px;
}
</style>

<style>
* {
    box-sizing: border-box;
}
</style>
