import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <div>Loading...</div>
      ) : (
        backendData.users.map((user, i) => <div key={i}>{user}</div>)
      )}
    </div>
  );
}

export default App;
