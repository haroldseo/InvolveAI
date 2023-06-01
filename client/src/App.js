import React, { useState, useEffect } from "react";

function App() {
  const [openAIData, setOpenAIData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setOpenAIData(data);
      });
  }, []);

  return <div>{typeof openAIData === "undefined" ? <div>Loading...</div> : <div>{openAIData}</div>}</div>;
}

export default App;
