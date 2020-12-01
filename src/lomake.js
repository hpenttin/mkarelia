import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Lomake() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        textarea: "",
        acceptTerms: false
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Etunimi vaaditaan"),
        lastName: Yup.string().required("Sukunimi vaaditaan"),
        email: Yup.string()
          .email("Sähköposti on virheellinen")
          .required("Sähköposti vaaditaan"),
        phone: Yup.string()
          .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            "Puhelinnumero ei ole oikein"
          )
          .required("Puhelinnumero vaaditaan"),
        textarea: Yup.string(),
        acceptTerms: Yup.bool().oneOf(
          [true],
          "Sinun tulee hyväksyä ehdot ennen lähetystä"
        )
      })}
      onSubmit={(fields, { resetForm }) => {
        alert(
          "Kiitos, olemme vastaanottaneet pyyntösi ja olemme sinuun yhteydessä. Voit nyt sulkea tämän ikkunan painamalla OK\n\n" +
            JSON.stringify(fields, null, 4)
        );
        resetForm({ values: "" });
      }}
    >
      {({ errors, status, touched }) => (
        <Form>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="firstName">Etunimi</label>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="lastName">Sukunimi</label>
              <Field
                name="lastName"
                type="text"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="email">Sähköposti</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="phone">Puhelinnumero</label>
              <Field
                name="phone"
                type="text"
                className={
                  "form-control" +
                  (errors.phone && touched.phone ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div>
            <div className="form-group col-15">
              <label htmlFor="firstName">
                Mistä palveluista olet kiinnostunut? Mikäli sinulla on lähellä
                metsätilasi kiinteistönumero, kirjaa se myös lomkkaalle - näin
                nopeutat palveluasi.
              </label>
              <Field
                component="textarea"
                rows="5"
                name="textarea"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group form-check">
            <Field
              type="checkbox"
              name="acceptTerms"
              className={
                "form-check-input " +
                (errors.acceptTerms && touched.acceptTerms ? " is-invalid" : "")
              }
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              Henkilötietojen käsittelyn ehdot
            </label>
            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Lähetä
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
