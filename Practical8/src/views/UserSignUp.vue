<template>
  <div class="Form_container">
    <div>
      <Form class="form_section" @submit="onSubmit" :validation-schema="schema">
        <br />
        <h2>Create an Account</h2>
        <div>
          <div class="form_input">
            <label class="form-label">Name</label>
            <Field name="name" type="text" class="form-control" placeholder="" />
            <ErrorMessage name="name" class="text-danger" />
          </div>

          <div class="form_input">
            <label class="form-label">Email</label>
            <Field name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="text-danger" />
          </div>

          <div class="form_input">
            <label class="form-label">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="text-danger" />
          </div>

          <div class="form_input">
            <label class="form-label">Confirm Password</label>
            <Field type="password" name="cpassword" class="form-control" />
            <ErrorMessage class="text-danger" name="cpassword" />
          </div>

          <div class="form_input">
            <label class="form-label">Role</label>
            <Field name="role" as="select" class="form-select form-control">
              <option disabled>Select Role of user</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="customer">Customer</option>
            </Field>
            <ErrorMessage class="text-danger" name="role" />
          </div>
          <div class="form_input">
            <div class="flex_container">
              <div>
                <label>Gender: &nbsp;</label>
              </div>
              <div class="input_element">
                <div>
                  <label>Men: &nbsp;</label>
                  <Field name="gender" type="radio" value="men" />
                </div>
                <br />
                <div>
                  <label>Women: &nbsp;</label>
                  <Field name="gender" type="radio" value="women" /> &nbsp;
                </div>
              </div>
            </div>
            <ErrorMessage class="text-danger" name="gender" />
          </div>

          <div class="form_input">
            <label class="form-label">Age: </label>
            <Field name="age" type="number" class="form-control" />
            <ErrorMessage class="text-danger" name="age" />
          </div>

          <div class="form_input">
            <label class="form-label">DOB</label>
            <Field name="dob" type="date" class="form-control" />
            <ErrorMessage class="text-danger" name="dob" />
          </div>
        </div>

        <button class="btn btn-primary">Submit</button>
      </Form>
      <br />
      <router-link to="/">
        <p class="login_text">Login now!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
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
  methods: {
    async onSubmit(values) {
      await axios
        .post(`https://testapi.io/api/dartya/resource/users`, values)
        .then((response) => {
          if (response.status == 201) {
            this.$router.push("/");
          }
        })
        .catch((error) => alert(error));
    },
  },
};
</script>

<style>
.form_input {
  min-width: 240px;
}

.Form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 211, 247);
}

.form_section>div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  flex-direction: column;
}

.form_section>div>div {
  margin: 10px 0;
  background-color: antiquewhite;
}

.flex_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input_element {
  background-color: white;
}

a {
  text-decoration: none;
}
</style>
