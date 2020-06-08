import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Certificate from "./components/Certificate";
import Form from "./components/Form";
import Sad from "./components/Sad";

const App = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    place: 1,
    competition: "",
  });
  const [decision, setDecision] = useState(null);
  const [decisionAgain, setDecisionAgain] = useState(null);
  const [successful, setSuccessful] = useState(false);
  return (
    <div className="container">
      <Welcome setDecision={setDecision} />
      <Sad
        style={{
          opacity: decision === false ? 1 : 0,
          zIndex: decision === false ? 100 : 0,
        }}
        setDecision={setDecisionAgain}
      />
      <Form
        setData={setData}
        data={data}
        style={{
          opacity: decision || decisionAgain ? 1 : 0,
          zIndex: decision || decisionAgain ? 200 : 0,
        }}
        setSuccessful={setSuccessful}
      />
      <Certificate
        data={data}
        style={{ opacity: successful ? 1 : 0, zIndex: successful ? 300 : 0 }}
        successful={successful}
      />
    </div>
  );
};

export default App;
