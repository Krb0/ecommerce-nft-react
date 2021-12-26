import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import StyledCartForm from "./StyledCartForm";
const CartForm = ({
  cart,
  orderState,
  orderDispatch,
  order,
  setOrder,
  totalPrice,
}) => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length < 4) {
          errors.name = "Name is too short!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const temporalCart = cart;
        setOrder({
          buyer: {
            email: values.email,
            name: values.name[0].toUpperCase() + values.name.substring(1),
          },
          items: temporalCart.map((cartItem) => {
            return {
              id: cartItem.item.id,
              name: cartItem.item.name,
            };
          }),
        });
        setSubmitting(false);
        orderDispatch({ type: "register", value: true });
      }}
    >
      {({ isSubmitting }) => (
        <StyledCartForm>
          <label to="name">Enter your Name</label>
          <Field id="name" type="name" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="span" />
          <label to="email">Enter your email</label>
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <ErrorMessage name="email" component="span" />
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
