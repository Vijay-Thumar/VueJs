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
                                <validation-provider name="name" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Name:</label>
                                        <input type="text" class="form-control" v-model="formData.name"
                                            placeholder='John' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="email" rules="required|email" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Email:</label>
                                        <input type="text" class="form-control" v-model="formData.email"
                                            placeholder='John@xyz.com' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="password" rules="required|min:6" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Password:</label>
                                        <input type="password" class="form-control" v-model="formData.password"
                                            placeholder='******' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="role" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Role:</label>
                                        <select class="form-control" v-model="formData.role">
                                            <option value="" disabled>Select Option</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Customer">Customer</option>
                                        </select>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="gender" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Gender:</label>
                                        <select class="form-control" v-model="formData.gender">
                                            <option value="" disabled>Select Option</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="Rather-not-say">Rather-not-say</option>
                                        </select>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="age" :rules="{ required: true, regex: /^[1-9]\d*$/, max: 2 }"
                                    v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Age:</label>
                                        <input type="text" class="form-control" v-model="formData.age"
                                            placeholder='John' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider name="date" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Date:</label>
                                        <input type="date" class="form-control" v-model="formData.dob"
                                            placeholder='John' />
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </validation-provider>

                                <button class="btn btn-primary" type="Submit">Submit</button>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    middleware: "notAuth",
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                role: '',
                gender: '',
                age: '',
                dob: '',
            },
        }
    },
    mounted() {
        if (this.$cookies.get('jwt') != null) {
            this.$router.push('/gallery')
        }
    },
    methods: {
        onSubmit() {
            const res = this.$store.dispatch('signupUser', this.formData)
            res.then((res) => {
                if (!res.message) {
                    this.$toast.success('Signup successful', {
                        position: 'bottom-right',
                        duration: 1000
                    })
                } else {
                    this.$toast.error('Canno\'t Signup', {
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
