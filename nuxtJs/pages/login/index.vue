<template>
    <transition>
        <div class="model_form">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- Modal title -->
                        <h5 class="modal-title"> Login</h5>
                    </div>
                    <!-- Modal Body -->
                    <div class="modal-body">
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(onSubmit)">
                                <validation-provider name="email" rules="required|email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Name:</label>
                                        <input type="text" class="form-control" v-model="formData.email"
                                            placeholder='John' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="password" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Password:</label>
                                        <input type="password" class="form-control" v-model="formData.password"
                                            placeholder='******' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <button class="btn btn-primary" :disabled="loading" type="Submit">Submit</button>
                            </form>
                        </ValidationObserver>
                    </div>
                    <!-- Modal Body End -->
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
import global from "~/mixins/global";
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    mixins: [global],
    middleware: ["notAuth"],
    data() {
        return {
            formData: {
                email: '',
                password: '',
            }
        }
    },
    mounted() {
        if(this.$cookies.get('jwt') != null){
            this.$router.push('/gallery')
        }
    },
    methods: {
        onSubmit() {
            this.$nuxt.$loading.start()
            const res = this.$store.dispatch('loginUser', this.formData)
            res.then((res) => {
                if (!res.message) {
                    this.$nuxt.$loading.finish()
                    this.$toast.success('Login successful', {
                        position: 'bottom-right',
                        duration: 1000
                    })
                    this.$router.push('/gallery')
                } else {
                    this.$nuxt.$loading.finish()
                    this.$toast.error('Canno\'t Login', {
                        position: 'bottom-right',
                        duration: 2000
                    })
                }
            })
        }
    },
}
</script>

<style scoped>
.model_form {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

label {
    font-size: 16px;
    float: left;
    margin-left: 8px;
}

input {
    margin-bottom: 12px;
    background-color: aliceblue;
}

label {
    font-weight: bold;
}

form button {
    margin: 0 8px;
    font-weight: bold;
}

.modal-dialog {
    margin-top: 5%;
}
</style>
