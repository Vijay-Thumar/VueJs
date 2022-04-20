<template>
        <div class="modal-body">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div>
              <label for="title" class="col-form-label">Car Title</label>
              <Field id="title" name="title" type="text" class="form-control" />
              <ErrorMessage name="title" class="text-danger" />
            </div>

            <div>
              <label for="description" class="col-form-label"
                >Car Description</label
              >
              <Field
                id="description"
                name="description"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>

            <div>
              <label for="price" class="col-form-label">Car Price</label>
              <Field
                id="price"
                name="price"
                type="number"
                class="form-control"
              />
              <ErrorMessage name="price" class="text-danger" />
            </div>

            <div>
              <label for="carimage" class="col-form-label">Car Image</label>
              <Field
                id="carimage"
                name="carimage"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="carimage" class="text-danger" />
            </div>

            <button class="btn btn-primary mt-3">Submit</button>
          </Form>
        </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {

  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const schema = Yup.object().shape({
      title: Yup.string().required("Car Title is Required!"),
      description: Yup.string()
        .required("Car Description is Required!")
        .min(30)
        .max(120),
      price: Yup.number().required("Car Price is Required!"),
      carimage: Yup.string()
        .required("Car Image is Required!")
        .url("Car Image must be url Format!"),
    });
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
      this.carsDetails.push(values);
      console.log(this.carsDetails);
    }
    return {
      schema,
      onSubmit,
    };
  },
};
</script>

<style scoped>
input {
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgb(154, 154, 154);
}
button {
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgb(74, 74, 74);
}
</style>
