import React, { useState, useEffect } from "react";

import UserInput from "./UserInput/UserInput";

function App() {
  const [openAIData, setOpenAIData] = useState("");
  const [userInput, setUserInput] = useState({ category: "", description: "", social: "" });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setOpenAIData(data);
      });
  }, []);

  return (
    <div>
      {typeof openAIData === "undefined" ? <div>Loading...</div> : <div>{openAIData}</div>}
      <UserInput setUserInput={setUserInput} />
      {userInput.category}
      {userInput.description}
      {userInput.social}
    </div>
  );
}

export default App;
