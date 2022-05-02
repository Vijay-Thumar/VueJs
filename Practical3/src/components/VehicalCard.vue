<template>
  <div class="List-home">
    <div class="main_container">
      <h2>{{ vehicalData.heading }}</h2>

      <div><img :src="vehicalData.image" alt="image of car" /></div>

      <h4>{{ vehicalData.details }}</h4>

      <div>
        <h4>{{ vehicalData.specs }}</h4>
      </div>

      <button
        v-if="vehicalData.price"
        @click="clickHandler(vehicalData.price, vehicalData.heading)"
        class="info_btn"
      >
        info
      </button>

      <button v-else disabled class="disable_button">Available soon!</button>

      <button
        type="button"
        data-toggle="modal"
        data-target="#editModal"
        class="edit_button"
        @click="editClickHandler"
      >
        Edit
      </button>
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">
                Modal {{ vehicalData.heading }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
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
                    :value="vehicalData.heading"
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
                    :value="vehicalData.details"
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
                    :value="vehicalData.specs"
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
                    :value="vehicalData.image"
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
                    :value="vehicalData.price"
                  />
                  <ErrorMessage name="price" class="text-danger h6" />
                </div>

                <button class="btn btn-secondary me-3">Submit</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  id="closeModal"
                >
                  Close
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <button class="delete_button" @click="deleteClickHandler">Delete</button>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  props: {
    vehicalData: Object,
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {};
  },
  methods: {
    clickHandler(price, heading) {
      alert("Car Name: " + heading + "\n" + "Price is: " + price);
    },
    deleteClickHandler() {
      console.log("Delete item invoked");
      this.$emit("DeleteIteam", this.vehicalData.id);
      // console.log(index)
    },
    editClickHandler() {
      console.log("Edit item invoked");
      this.$emit("editIteam", this.vehicalData.id);
      // console.log(index)
    },
    onEditSubmit(values) {
      values.id = Math.floor(Date.now() * Math.random());
      // alert(JSON.stringify(values, null, 2));
      this.$emit("editedIteam", values);
      document.getElementById("closeModal").click();
    },
  },
  setup() {
    const schema = yup.object().shape({
      heading: yup.string().required("Car heading is Required!"),
      details: yup
        .string()
        .required("Car Description is Required!")
        .min(30)
        .max(500),
      specs: yup
        .string()
        .required("Car Specification is Required!")
        .min(12)
        .max(500),
      image: yup
        .string()
        .required("Car Image is Required!")
        .url("Car Image must be url Format!"),
      // price: yup.number().required("Car Price is Required!"),
    });

    return {
      schema,
    };
  },
};
</script>

<style scoped>
.edit_button {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: green;
  margin: 5px;
  color: #fff;
}
.edit_button:hover {
  background-color: green;
  border-radius: 15px;
  border-top: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  padding: 10px 25px;

  color: white;
  cursor: pointer;
}
.edit_button:active {
  background-color: green;
  border-radius: 15px;
  border-top: 1px solid darkgreen;
  border-top: 1px solid darkgreen;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
.delete_button {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: rgba(125, 27, 0, 0.974);
  margin: 5px;
  color: #fff;
}
.delete_button:hover {
  background-color: rgba(125, 27, 0, 0.974);
  border-radius: 15px;
  border-top: 2px solid rgba(102, 22, 0, 0.974);
  border-top: 2px solid rgba(102, 22, 0, 0.974);
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
.delete_button:active {
  background-color: rgba(125, 27, 0, 0.974);
  border-radius: 15px;
  border-top: 1px solid rgba(102, 22, 0, 0.974);
  border-top: 1px solid rgba(102, 22, 0, 0.974);
  padding: 10px 25px;
  color: white;
  cursor: pointer;
}
h4 {
  margin: 40px 0 0;
}

.btn {
  border-radius: 15px;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
}
.main_container {
  background-color: rgb(230, 211, 247);
  padding: 50px;
  max-width: 700px;
  min-height: 628px;
  margin: 10px;
  border-radius: 50px;
}
.info_btn {
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c;
  color: #fff;
}
img {
  max-width: 400px;
}
.List-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
}
.disable_button {
  margin: 5px;
  border-radius: 15px;
  padding: 10px 25px;
  margin: 10px 0 0 0;
  background-color: #50302c6e;
  color: #fff;
}
</style>
