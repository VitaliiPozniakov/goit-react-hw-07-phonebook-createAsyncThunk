import React from 'react';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(32)
    .trim()
    .matches()
    .required('Please enter name'),
  phone: yup.number().required('Please enter phone'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = ({ contacts, createContact }) => {
  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatPhone = phone => {
    return contacts.find(contact => contact.phone === phone);
  };

  const handleSubmit = (values, actions) => {
    const { name, phone } = values;

    if (checkRepeatName(name)) {
      Notify.warning(`Contact with name "${name}" is already in phonebook`);
    } else if (checkRepeatPhone(phone)) {
      Notify.warning(`Contact with phone "${phone}" is already in phonebook`);
    } else {
      createContact({ name, phone });
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.forma}>
        <label htmlFor="name" className={css.label}>
          <span className={css.labelText}>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label htmlFor="phone" className={css.label}>
          <span className={css.labelText}>Phone</span>
          <Field type="tel" name="phone" className={css.input} />
          <ErrorMessage name="phone" component="span" className={css.error} />
        </label>
        <div className={css.btnWraper}>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
