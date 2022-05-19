<template>
  <div>
    <div v-if="formVisibility" class="model_form">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update: <b>{{ sd.name }}</b></h5>
          </div>
          <div class="modal-body">
             <button v-if="!sd.specs" class="btn btn-primary" @click="showSpecClickHandler"> Add Specification </button>
            <Form @submit="onEditSubmit" :validation-schema="schema">
              <div>
                <label>Car Name:</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name:- Ex:- Ambassador"
                  class="form-control"
                  :value="sd.name"
                />
                <ErrorMessage name="name" class="text-danger h6" />
              </div>

              <div>
                <label>Details:</label>
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

              <div v-if="sd.specs || isSpecification">
                <label>Specification:</label>
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
                <label>Image Url:</label>
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
                <label>Price:</label>
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
      formHandler: true,
      isSpecification: false,
    };
  },

  computed: {
    showModel: {
      get: function () {
        return this.formHandler;
      },
      set: function (newValue) {
        return (this.formHandler = newValue);
      },
    },
  },
  methods: {
    closeClickHandler() {
      this.$emit("formHandlerData", (this.formHandler = false));
    },
    onEditSubmit(values) {
      values.id = Math.floor(Date.now() * Math.random());
      this.$emit("editedIteam", values);
      this.$emit("formHandlerData", (this.formHandler = false));
    },
    showSpecClickHandler(){
      this.isSpecification = !this.isSpecification;
    }
  },

  setup() {
    const schema = yup.object().shape({
      name: yup.string().required("Car name is Required!"),
      details: yup
        .string()
        .required("Car Description is Required!")
        .min(10)
        .max(500),
      specs: yup
        .string()
        .min(10)
        .max(500),
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
label {
  font-size: 16px;
  float: left;
  margin-left: 8px;
}   
</style>
