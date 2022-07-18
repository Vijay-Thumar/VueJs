<template>
  <transition>
    <div v-if="formDetails.showForm" class="model_form">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AddCarFormLabel">
              {{ formDetails.formHeading || 'Add Car' }}
            </h5>
          </div>
          <div class="modal-body">
            <validation-observer v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(onSubmit)">

                <validation-provider name="name" rules="required" v-slot="{ errors }">
                  <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" v-model="formData.name" placeholder='Mustang' />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider name="details" rules="required|min:10" v-slot="{ errors }">
                  <div class="form-group">
                    <label>Details:</label>
                    <input type="text" class="form-control" v-model="formData.details"
                      placeholder="Build by Ford comp" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider name="image"
                  :rules="{ required: true, regex: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, }"
                  v-slot="{ errors }">
                  <div class="form-group">
                    <label>Image Url:</label>
                    <input type="text" class="form-control" v-model="formData.image"
                      placeholder="https://example.com" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider name="price" :rules="{ required: true, regex: /^[1-9]\d*$/, }" v-slot="{ errors }">
                  <div class="form-group">
                    <label>Price:</label>
                    <input type="text" class="form-control" v-model="formData.price" placeholder="1234567890" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <br>
                <button class="btn btn-primary" type="Submit">Submit</button>
                <button class="btn btn-secondary" type="button" @click="closeClickHandler">Close</button>

              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      formDetails: `getForm`,
      loading: `getLoading`,
      apiErr: `getApiError`,
    }),
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    formDetails() {
      return this.$store.state.formDetails
    },
    formData() {
      return {
        id: this.$store.state.formDetails.formInitialValue.id || '',
        name: this.$store.state.formDetails.formInitialValue.name || '',
        details: this.$store.state.formDetails.formInitialValue.details || '',
        image: this.$store.state.formDetails.formInitialValue.image || '',
        price: this.$store.state.formDetails.formInitialValue.price || '',
      }
    }
  },
  methods: {
    onSubmit() {
      const formAction = this.formDetails.formAction;

      if (formAction == 'add') {
        const res = this.$store.dispatch(`postCarDetails`, this.formData)
        res.then((res) => {
          if (!res.message) {
            this.$toast.success('Car added', {
              position: 'bottom-right',
              duration: 1000
            })
          } else {
            this.$toast.error('Canno\'t Add Car', {
              position: 'bottom-right',
              duration: 2000
            })
          }
        })

      } else {

        const res = this.$store.dispatch(`editCarDetails`, this.formData)
        res.then((res) => {
          if (!res.message) {
            this.$toast.success('Modification was Successfull', {
              position: 'bottom-right',
              duration: 1000
            })
          } else {
            this.$toast.error('Canno\'t Edit Car', {
              position: 'bottom-right',
              duration: 2000
            })
          }

        })
      }
    },

    closeClickHandler() {
      this.$store.dispatch('setForm', { showform: false })
    }
  },
};
</script>

<style scoped>
.model_form {
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  overflow-x: hidden;
  overflow-y: auto;
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
.modal-dialog{
  margin-top: 5%;
}
</style>
