//Import necessary modules and libraries
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import express from "express";
import * as dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 3001;

//Load environmental variables
dotenv.config();

//Create Model, allows us to connect to LLMs, in this case, OpenAI API
const runOpenAI = async () => {
  const model = new OpenAI({
    temperature: 0.9,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const openAIResponse = await model.call("What would be a good company name a company that makes colorful socks?");
  return openAIResponse;
};

//Generates dynamic prompt for model
const generatePrompt = async () => {
  const prompt = PromptTemplate.fromTemplate(
    "If provided a short description of {this}, can you generate promotional content for it and tailor it for {social}?"
  );
  const promptResponse = await prompt.format({ this: "product", social: "Twitter" });
  console.log(promptResponse);
};
generatePrompt();

app.get("/api", async (req, res) => {
  const openAIResponse = await runOpenAI();
  res.json(openAIResponse);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
