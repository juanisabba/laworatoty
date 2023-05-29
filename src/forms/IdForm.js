import React from "react";

const IdForm = ({ submitData, id, setId }) => {
  return (
    <div className="id__form--container">        
    <form onSubmit={submitData} className="id__form">
      <h2>Selecciona el ID del usuario</h2>
      <div>
        <input
          type="number"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <button className="button" type="">Buscar</button>
    </form>
    </div>
  );
};

export default IdForm;
