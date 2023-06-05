import React, { useState, useEffect } from "react";

import UserInput from "./UserInput/UserInput";
import PromotionalContent from "./PromotionalContent/PromotionalContent";
import "./App.css";

function App() {
  const [openAIData, setOpenAIData] = useState();
  const [userInput, setUserInput] = useState({ category: "", description: "", social: "" });
  const [isLoading, setIsLoading] = useState(false);

  //Makes a post request with user input to the server
  useEffect(() => {
    if (userInput.category !== "" && userInput.description !== "" && userInput.social !== "") {
      setIsLoading(true);
      const postRequest = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      };
      fetch("/api", postRequest)
        .then((res) => res.json())
        .then((data) => {
          setOpenAIData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log("Error:", error));
    }
  }, [userInput]);

  return (
    <div>
      <UserInput setUserInput={setUserInput} />
      {isLoading ? <div className='loading'>Loading...</div> : <PromotionalContent openAIData={openAIData} />}
    </div>
  );
}

export default App;
