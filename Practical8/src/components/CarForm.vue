<template>
  <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <div v-if="formDetails.showForm" class="model_form">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AddCarFormLabel">
              {{ formDetails.formHeading }}
            </h5>
          </div>
          <div class="modal-body">
            <Form @submit="onSubmitHandler" :initial-values="formDetails.formInitialValue" :validation-schema="schema">
              <div>
                <label>Car Name:</label>
                <Field type="hidden" name="id" class="form-control" />
                <Field id="name" name="name" type="text" placeholder="Name:- Ex:- Ambassador" class="form-control" />
                <ErrorMessage name="name" class="text-danger h6" />
              </div>

              <div>
                <label>Details:</label>
                <Field id="details" name="details" type="text" placeholder="Description Ex:- Owner of this Organization"
                  class="form-control" />
                <ErrorMessage name="details" class="text-danger h6" />
              </div>

              <div>
                <label>Image Url:</label>
                <Field id="image" name="image" type="text" placeholder="Image Link Ex:- https://abc.com"
                  class="form-control" />
                <ErrorMessage name="image" class="text-danger h6" />
              </div>

              <div>
                <label>Price:</label>
                <Field id="price" name="price" type="number" placeholder="Ex:- 123456 Only/-" class="form-control" />
                <ErrorMessage name="price" class="text-danger h6" />
              </div>

              <button class="btn btn-secondary">Submit</button>
              <button @click="closeFormHandler" type="button" class="btn btn-secondary">
                close
              </button>
            </Form>
          </div>
        </div>
      </div>
      <div v-if="loading" class="text-danger"> Saving your data... </div>
      <div v-if="apiErr" class="text-danger"> {{ apiErr }} </div>
    </div>
  </transition>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { mapActions, mapGetters } from "vuex";
import gsap from "gsap";
import * as yup from "yup";
export default {
  name: "AddCarForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapGetters({
      formDetails: 'getForm',
      loading: "getLoading",
      apiErr: "getApiError",
    }),
    // formDetails() {
    //   return this.$store.getters.getForm;
    // },
  },
  methods: {
    ...mapActions({
      setForm: 'setForm',
      addCar: 'postCarDetails',
      editCar: 'editCarDetails',
    }),

    onSubmitHandler(values) {
      console.log(values)
      const action = this.formDetails.formAction;
      this.formDetails.formInitialValue = values;
      this.$store.dispatch('setForm', this.formDetails)

      if (action === 'add') {
        values.id = null
        const res = this.$store.dispatch('postCarDetails', values)
        res.then((res) => {
          if (res === 201) {
            this.$toast.success('Car Added.', {
              position: "top-right",
              duration: 1000,
            })
          }
          else {
            this.$toast.error('Fail to add Car!', {
              position: 'top-right',
              duration: 2000
            })
          }
        })
      } else {
        const res = this.$store.dispatch('editCarDetails', values)
        res.then((res) => {
          if (res.status === 200) {
            this.$toast.success('Modification is Applied', {
              position: 'top-right',
              duration: 1000
            })
          }else{
             this.$toast.error('Cannot Modify!', {
              position: 'top-right',
              duration: 2000
            })
          }
        })
      }
    },

    closeFormHandler() {
      this.formDetails.showForm = false;
      this.$store.dispatch("setForm", this.formDetails);
    },

  },


  setup() {

    const schema = yup.object().shape({
      id: yup.string(),
      name: yup.string().required("Car name is Required!"),
      details: yup
        .string()
        .required("Car Description is Required!")
        .min(10)
        .max(500),
      image: yup
        .string()
        .required("Car Image is Required!")
        .url("Car Image must be url Format!"),
      price: yup.number().required("Car Price is Required!"),
    });

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(-1000px)"
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        onComplete: done
      })
    };

    const beforeLeave = (el) => {
      el.style.opacit = 0;
      el.style.transform = "translateY(-100px)"

    }

    const leave = (el, done) => {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        onComplete: done,
        y: -1000,
      })
    }

    return {
      schema,
      beforeEnter,
      enter,
      beforeLeave,
      leave
    };
  },
};
</script>

<style scoped>
.model_form {
  z-index: 1072;
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
</style>
