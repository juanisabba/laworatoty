import React from "react";

const SuccessResponse = ({data}) => {
  const response = {
    status: 201,
    code: "ok",
    data: {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      age: data.age,
      loan_amount: data.loan_amount,
      loan_weeks: data.loan_weeks,
    },
  };

  return (
    <div className="success">
        <h3>Gracias</h3>        
        <div style={{color: "#000"}}>{JSON.stringify(response)}</div>
    </div>
  )
};

export default SuccessResponse;
