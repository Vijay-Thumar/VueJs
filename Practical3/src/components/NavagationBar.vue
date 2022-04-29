<template>
  <div class="Navagation_bar">
    <div>Navagation bar from navagation</div>
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
              <Form @submit="submit" :validation-schema="schema">
                <Field name="heading" />
                <ErrorMessage name="heading" />
                <Field name="description" type="text" />
                <ErrorMessage name="description " />
                <Field name="heading" />
                <ErrorMessage name="heading" />
                <Field name="description" type="text" />
                <ErrorMessage name="description " />
                <button>Submit</button>
              </Form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
    };
  },
};
</script>

<style>
.Navagation_bar {
  min-width: 80%;
  background-color: rgb(84, 121, 241);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
  border-radius: 50px;
  padding: 0 80px;
}
.add_button {
  background-color: green;
  border-radius: 25px;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
.add_button:hover {
  background-color: green;
  border-radius: 25px;
  border-top: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
.add_button:active {
  background-color: green;
  border-radius: 25px;
  border-top: 1px solid darkgreen;
  border-top: 1px solid darkgreen;
  padding: 8px 15px;
  font-size: 21px;
  color: white;
  cursor: pointer;
}
</style>
