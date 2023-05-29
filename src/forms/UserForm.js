import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formSchema } from "../validations/ValidationSchema";
import SuccessResponse from "../response/SuccessResponse";
import axios from "axios";
import ErrorForm from "./ErrorForm";

const UserForm = ({ data, setData, setId }) => {
  const [conditionsErrorMsg, setconditionsErrorMsg] = useState(false)
  const [showResponse, setShowResponse] = useState()
  const URL = `https://api7.cloudframework.io/recruitment/fullstack/users/${data.id}`
  const headers = {
    'X-WEB-KEY': 'Development'
  };
  
const fetchData =  async(values) => {
  try {
    await axios.post(URL, values, {headers})
    .then(res => {
      setShowResponse(200)
      console.log(data)
    })
    .catch(_=> setShowResponse(404))
  } catch (error) {
    setShowResponse(404)
  }
}

  const handleData = (values) => {
    if(!data.check) setconditionsErrorMsg(true)
    else{
      setconditionsErrorMsg(false)
      fetchData(values)
    }
  };
  return (
    <>
    {
      !showResponse ? (
        <Formik
        initialValues={data}
        validationSchema={formSchema}
        onSubmit={handleData}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="user__form-container">
              <div>
                <div className="user__form">
                  <b>Nombre</b>
                  <Field
                    className="field"
                    style={{
                      borderColor: errors.name && touched.name && "red",
                    }}
                    type="text"
                    value={data.name}
                    disabled
                  />
                </div>
              </div>
              <div>
                <div className="user__form">
                  <b>Apellido</b>
                  <Field
                    className="field"
                    style={{
                      borderColor: errors.surname && touched.surname && "red",
                    }}
                    name="surname"
                    type="text"
                    disabled
                  />
                  {errors.surname && touched.surname && (
                    <div className="error">{errors.surname}</div>
                  )}
                </div>
              </div>
              <div>
                <div className="user__form">
                  <b>Email</b>
                  <Field
                    className="field"
                    disabled
                    name="email"
                    type="text"
                    value={data.email}
                  />
                </div>
              </div>
              <div>
                <div className="user__form">
                  <b>Teléfono</b>
                  <Field
                    className="field"
                    style={{
                      borderColor: errors.phone && touched.phone && "red",
                    }}
                    name="phone"
                    type="number"
                  />
                </div>
                {errors.phone && touched.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
              <div>
                <div className="user__form">
                  <b>Edad</b>
                  <Field
                    className="field"
                    style={{
                      borderColor: errors.age && touched.age && "red",
                    }}
                    name="age"
                    type="number"
                  />
                </div>
                {errors.age && touched.age && (
                  <div className="error">{errors.age}</div>
                )}
              </div>
              <div>
                <div className="user__form">
                  <b>Importe del préstamo</b>
                  <Field
                    className="field"
                    style={{
                      borderColor:
                        errors.loan_amount && touched.loan_amount && "red",
                    }}
                    name="loan_amount"
                    type="number"
                  />
                  <select>
                    <option>EUR</option>
                    <option>USD</option>
                  </select>
                </div>
                {errors.loan_amount && touched.loan_amount && (
                  <div className="error">{errors.loan_amount}</div>
                )}
              </div>
              <div>
                <div className="user__form">
                  <b>Fecha del préstamo</b>
                  <Field
                    className="field"
                    style={{
                      borderColor: errors.loan_date && touched.loan_date && "red",
                    }}
                    name="loan_date"
                    type="date"
                  />
                </div>
                {errors.loan_date && touched.loan_date && (
                  <div className="error">{errors.loan_date}</div>
                )}
              </div>
              <div>
                <div className="user__form">
                  <b>Tiempo a devolver</b>
                  <Field
                    className="field"
                    style={{
                      borderColor:
                        errors.loan_weeks && touched.loan_weeks && "red",
                    }}
                    name="loan_weeks"
                    type="number"
                  />
                </div>
                {errors.loan_weeks && touched.loan_weeks && (
                  <div className="error">{errors.loan_weeks}</div>
                )}
              </div>
              <div>
                <div>
                  <input type="checkbox" name="" value={data.check} onClick={(e)=>setData({...data, check: !data.check})} />
                  <b>
                    Acepto los{" "}
                    <a
                      href="https://cloudframework.io/terminos-y-condiciones"
                      target="_blank"
                      rel="noreferrer"
                    >
                      términos y condiciones
                    </a>
                  </b>
  
                  {conditionsErrorMsg && (
                    <div className="error">Debes aceptar los términos y condiciones</div>
                  )}
                </div>
              </div>
              <div className="button__container">
                <button className="button" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>  
      ) : showResponse === 200 ? <SuccessResponse data={data}/> : <ErrorForm setData={setData} setId={setId} message={"Ha ocurrido un error. Por favor vuelva al inicio"}/>
    }
    </>
  );
};

export default UserForm;
