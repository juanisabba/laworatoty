import * as Yup from "yup";


export const formSchema = Yup.object().shape({
  phone: Yup.number()
  .min(0, "Número de teléfono inválido")
  .required("Este campo es obligatorio"),
  age: Yup.number()
  .min(0, "Edad inválida")
  .required("Este campo es obligatorio"),
  loan_amount: Yup.number()
  .min(10, "El importe debe ser mayor a 10")
  .max(1000, "El importe debe ser menor a 1.000")
  .required("Este campo es obligatorio"),
  loan_date: Yup.date().min(new Date(), 'La fecha no puede ser pasada'),
  loan_weeks: Yup.number()
  .min(1, "El importe debe ser mayor a 0")
  .max(20, "El importe debe ser menor a 20")
  .required("Este campo es obligatorio"),
  check: Yup.boolean(true, "Este campo es obligatorio")
});