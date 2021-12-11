import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import StyledCartForm from "./StyledCartForm";
import { addOrder } from "../../Firebase/firebase";
const CartForm = ({ cart }) => {
  const [bought, setBought] = useState([{}]);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const temporalCart = cart;
          setBought([
            {
              buyer: { email: values.email, password: values.password },
              items: temporalCart.map((cartItem) => {
                return { id: cartItem.item.id, name: cartItem.item.name };
              }),
            },
          ]);
          addOrder(bought);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledCartForm>
          <label to="email">Insert Email</label>
          <Field id="email" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label to="password">Insert your Password</label>
          <Field id="password" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button
            className="btn-complete"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </StyledCartForm>
      )}
    </Formik>
  );
};

export default CartForm;
