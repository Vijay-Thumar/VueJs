<template>
  <div>
    <div v-if="formVisibility" class="model_form">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="AddCarFormLabel">{{ formHeading }}</h5>
          </div>
          <div class="modal-body">
            <Form
            @submit="onSubmitHandler"
            :initial-values="initialValues"
            :validation-schema="schema"
          >
            <div>
              <label>Car Name:</label>
              <Field type="hidden" name="id" class="form-control" />
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Name:- Ex:- Ambassador"
                class="form-control"
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
              />
              <ErrorMessage name="details" class="text-danger h6" />
            </div>

            <div>
              <label>Image Url:</label>
              <Field
                id="image"
                name="image"
                type="text"
                placeholder="Image Link Ex:- https://abc.com"
                class="form-control"
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
              />
              <ErrorMessage name="price" class="text-danger h6" />
            </div>

            <button class="btn btn-secondary">Submit</button>
            <button @click="this.formVisibilityHandler(false)" type="button" class="btn btn-secondary">close</button>
          </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "AddCarForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    initialValues: Object,
    formHeading: String,
    formSubmitHandler: Function,
    formVisibility: Boolean,
    formVisibilityHandler: Function,
  },
  methods: {
    onSubmitHandler(values) {
      alert(JSON.stringify(values));
      this.formSubmitHandler(values);
      this.formVisibilityHandler(false)
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

    return {
      schema,
    };
  },
};
</script>

<style scoped>
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
input{
  margin-bottom: 12px;
  background-color: aliceblue;
}
label{
  font-weight: bold;
}
form button{
  margin: 0 8px;
  font-weight: bold;

}
</style>
