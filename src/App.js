import { useState } from "react";
import "./App.css";
import axios from "axios";
import UserForm from "./forms/UserForm";
import ErrorForm from "./forms/ErrorForm";
import IdForm from "./forms/IdForm";

function App() {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const URL = `https://api7.cloudframework.io/recruitment/fullstack/users?id=${id}`;

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios.get(URL).then((res) => {
        setData({
          ...res.data.data,
          loan_amount: "",
          currency: "EUR",
          loan_date: new Date(),
          loan_weeks: "",
          check: false,
          status: 200,
        });
      });
    } catch (error) {
      setData({ status: 404 });
    }
  };

  return (
    <div className="App">
      {!data ? (
        <IdForm submitData={submitData} id={id} setId={setId}/>
      ) : data.status === 200 ? (
        <UserForm data={data} setData={setData} setId={setId}/>
      ) : (
        <ErrorForm setData={setData} setId={setId} message={"El id ingresado no existe"}/>
      )}
    </div>
  );
}

export default App;
