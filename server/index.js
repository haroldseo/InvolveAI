const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const { OpenAI } = require("langchain/llms/openai");

app.get("/api", (req, res) => {
  res.json({ users: ["One", "Two", "Three", "Four"] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
