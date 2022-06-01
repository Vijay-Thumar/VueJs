<template>
  <div class="body_container">
    <div class="container-sm">
      <Form class="form_container" @submit="onSubmit" :validation-schema="schema">
        <h2 class="margin_tb mb-3 pt-3">Create an Account</h2>
        <div>
          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Name</label>
            </div>
            <div class="col">
              <Field name="name" type="text" class="form-control" placeholder="Enter Full Name" />
            </div>
            <div class="col">
              <ErrorMessage name="name" class="text-danger" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Email</label>
            </div>
            <div class="col">
              <Field name="email" type="email" class="form-control" placeholder="Enter Email address" />
            </div>
            <div class="col">
              <ErrorMessage name="email" class="text-danger" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Password</label>
            </div>
            <div class="col">
              <Field name="password" type="password" class="form-control" placeholder="Enter Password" />
            </div>
            <div class="col">
              <ErrorMessage name="password" class="text-danger" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Confirm Password</label>
            </div>
            <div class="col">
              <Field type="password" name="cpassword" class="form-control" placeholder="Enter Confirm Password" />
            </div>
            <div class="col">
              <ErrorMessage class="text-danger" name="cpassword" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Role</label>
            </div>
            <div class="col">
              <Field name="role" as="select" class="form-select form-control" placeholder="Select Role">
                <option disabled>Select Role of user</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
              </Field>
            </div>
            <div class="col">
              <ErrorMessage class="text-danger" name="role" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-4">
              <label>Gender: &nbsp;</label>
            </div>
            <div class="col-2">
              <label>Men: &nbsp;</label>
              <Field name="gender" type="radio" value="men" />
            </div>
            <div class="col-3">
              <label>Women: &nbsp;</label>
              <Field name="gender" type="radio" value="women" /> &nbsp;
            </div>
            <div class="col">
              <ErrorMessage class="text-danger" name="gender" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">Age: </label>
            </div>
            <div class="col">
              <Field name="age" type="number" class="form-control" placeholder="Enter Age" />
            </div>
            <div class="col">
              <ErrorMessage class="text-danger" name="age" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <label class="form-label">DOB</label>
            </div>
            <div class="col">
              <Field name="dob" type="date" class="form-control" />
            </div>
            <div class="col">
              <ErrorMessage class="text-danger" name="dob" />
            </div>
          </div>
        </div>

        <div class="col">
          <button class="btn btn-primary">Submit</button>
        </div>
        <br>
      </Form>
      <div v-if="loading">Hold On We Are signing you...</div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {  mapGetters } from "vuex";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      name: yup.string().required("Name is required*"),
      email: yup.string().required("Email is required*").email(),
      password: yup
        .string()
        .required("Password is required*")
        .matches(
          /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
          "Password should be atleast 8 characters long, max 12 characters,one special character and one number"
        ),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password doesn't match")
        .required("Confirm Password is required*"),
      role: yup.string().required("User Role is required*"),
      gender: yup.string().required("Gender is required*"),
      age: yup
        .number("age must be number")
        .required("Age of user is required*"),
      dob: yup.date().required("DOB of user is required*"),
    });
    return {
      schema,
    };
  },
  computed: {
    ...mapGetters({
      loading: `form/getLoading`
    })
  },
  methods: {
    onSubmit(values) {
      const promise = this.$store.dispatch(`auth/signupUser`, values)
      promise.then((response) => {
        if (response === 201) {
          this.$toast.success(`SignUp successful`, {
            position: "top-right",
            duration: 1500,
          });
        } else {
          this.$toast.error('Fail to Create User!', response, {
            position: "top-right",
            duration: 1500,
          });
        }
      })
    },
  },
};
</script>

<style scoped>
.form_container {
  /* background-color: rgb(210, 252, 167); */
  background: linear-gradient(to right, #ff99ff 0%, #99ccff 100%);
  border-radius: 24px;

}

.body_container {
  /* background-color: rgba(104, 158, 112, 0.407); */
  /* background: linear-gradient(to left, #ff99ff 0%, #99ccff 100%); */

  height: 100vh;
}

a {
  text-decoration: none;
}
</style>
