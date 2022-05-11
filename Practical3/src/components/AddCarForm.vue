<template>
  <div>
    <div
      class="modal fade"
      id="AddCarForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="AddCarFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AddCarFormLabel">Add Car</h5>
            <button
              type="button"
              id="close_add_model"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <Form @submit="onSubmit" :validation-schema="schema">
              <div>
                <label>Car Name</label>
                <Field
                  id="heading"
                  name="heading"
                  type="text"
                  placeholder="Heading:- Ex:- Ambassador"
                  class="form-control"
                />
                <ErrorMessage name="heading" class="text-danger h6" />
              </div>

              <div>
                <label>Details</label>
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
                <label>Specification</label>
                <Field
                  id="specs"
                  name="specs"
                  type="text"
                  placeholder="Specification Ex:- Power-HP/500CC Petrol/Diesel"
                  class="form-control"
                />
                <ErrorMessage name="specs" class="text-danger h6" />
              </div>

              <div>
                <label>Image Url</label>
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
                <label>Price</label>
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
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
      onSubmit(values) {
        // this.carsDetails.push = values;
        alert(JSON.stringify(values, null, 2));
        console.log("form values: ", values);
        this.$emit("onFormSubmitHandler", JSON.stringify(values));
        document.getElementById("close_add_model").click();
      },
    },
  setup() {
    const schema = yup.object().shape({
      heading: yup.string().required("Car heading is Required!"),
      details: yup
        .string()
        .required("Car Description is Required!")
        .min(10)
        .max(500),
      specs: yup
        .string()
        .required("Car Specification is Required!")
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
