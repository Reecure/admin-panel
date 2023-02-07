import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

interface IInitialValues {
  firstName: string;
  lastName: string;
  email: string;
  contsct: string;
  adress1: string;
  adress2: string;
}

const initialValues: IInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contsct: "",
  adress1: "",
  adress2: "",
};

const phoneRegExp = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contsct: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  adress1: yup.string().required("required"),
  adress2: yup.string().required("required"),
});

const ProfileForm = () => {
  const handleFormSubmit = () => {};
  return (
    <div>
      <Header title="create user" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input placeholder="First Name" />
                <input placeholder="Last Name" />
              </div>
              <input placeholder="Last Name" />
              <input placeholder="Last Name" />
              <input placeholder="Last Name" />
              <input placeholder="Last Name" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProfileForm;
