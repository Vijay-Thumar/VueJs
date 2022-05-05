<template>
  <div>
    <div v-if="formVisibility"  class="model_form">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update {{sd.heading}}</h5>
          </div>
          <div class="modal-body">
            <Form @submit="onEditSubmit" :validation-schema="schema">
              <div>
                <Field
                  id="heading"
                  name="heading"
                  type="text"
                  placeholder="Heading:- Ex:- Ambassador"
                  class="form-control"
                  :value="sd.heading"
                />
                <ErrorMessage name="heading" class="text-danger h6" />
              </div>

              <div>
                <Field
                  id="details"
                  name="details"
                  type="text"
                  placeholder="Description Ex:- Owner of this Organization"
                  class="form-control"
                  :value="sd.details"

                />
                <ErrorMessage name="details" class="text-danger h6" />
              </div>

              <div>
                <Field
                  id="specs"
                  name="specs"
                  type="text"
                  placeholder="Specification Ex:- Power-HP/500CC Petrol/Diesel"
                  class="form-control"
                  :value="sd.specs"

                />
                <ErrorMessage name="specs" class="text-danger h6" />
              </div>

              <div>
                <Field
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Image Link Ex:- https://abc.com"
                  class="form-control"
                  :value="sd.image"
                  
                />
                <ErrorMessage name="image" class="text-danger h6" />
              </div>

              <div>
                <Field
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Ex:- 123456 Only/-"
                  class="form-control"
                  :value="sd.price"
                />
                <ErrorMessage name="price" class="text-danger h6" />
              </div>

              <button class="btn btn-secondary me-3">Submit</button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                id="closeModal"
                @click="closeClickHandler"
              >
                Close
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script type="text/javascript">
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "CarForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    formVisibility: Boolean,
    sd: Object,
  },
  data() {
      return {
          formHandler: true
      }
  },

  computed: {
    showModel: {
      get: function () {
        return this.formHandler;
      },
      set: function (newValue) {
        return this.formHandler = newValue
      },
    },
  },
  methods: {
    closeClickHandler() {
      this.$emit("formHandlerData", this.formHandler = false);
    },
    onEditSubmit(values) {
      values.id = Math.floor(Date.now() * Math.random());
      // alert(JSON.stringify(values, null, 2));
      this.$emit("editedIteam", values);
      this.$emit("formHandlerData", this.formHandler = false);
    },
  },

  setup() {
    const schema = yup.object().shape({
      heading: yup.string().required("Car heading is Required!"),
      details: yup
        .string()
        .required("Car Description is Required!")
        .min(10)
        .max(30),
      specs: yup
        .string()
        .required("Car Specification is Required!")
        .min(10)
        .max(30),
      image: yup
        .string()
        .required("Car Image is Required!")
        .url("Car Image must be url Format!"),
    });

    return {
      schema,
    };
  },
};
</script>

<style>
.model_form {
  z-index: 1072;
  position: fixed;
  background: rgba(0, 0, 0, 0.51);
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
