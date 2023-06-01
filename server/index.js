//Import necessary modules and libraries
import { OpenAI } from "langchain/llms/openai";
import express from "express";
import * as dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 3001;

//Load environmental variables
dotenv.config();

//Create Model, allows us to connect to LLMs
const runOpenAI = async () => {
  const model = new OpenAI({
    temperature: 0.9,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const openAIResponse = await model.call("What would be a good company name a company that makes colorful socks?");
  return openAIResponse;
};

app.get("/api", async (req, res) => {
  const openAIResponse = await runOpenAI();
  res.json(openAIResponse);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
