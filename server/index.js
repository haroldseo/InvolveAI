//Import necessary modules and libraries
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3001;

//Load environmental variables
dotenv.config();

//Create Model, allows us to connect to LLMs, in this case, OpenAI API
const runOpenAI = async ({ promptResponse }) => {
  const model = new OpenAI({
    temperature: 0.9,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const openAIResponse = await model.call(promptResponse);
  console.log("Response from AI", openAIResponse);
  return openAIResponse;
};

//Generates dynamic prompt for model
const generatePrompt = async ({ receivedUserData }) => {
  const prompt = PromptTemplate.fromTemplate("Generate promotional content for {social}, {category}: {description}");
  const promptResponse = await prompt.format({
    category: receivedUserData.category,
    description: receivedUserData.description,
    social: receivedUserData.social,
  });
  return promptResponse;
};

//Parses JSON data
app.use(bodyParser.json());

//Receives post request with user input, creates prompt and calls OpenAI API, and returns response
app.post("/api", async (req, res) => {
  const receivedUserData = req.body;
  const promptResponse = await generatePrompt({ receivedUserData });
  const openAIGeneratedResponse = await runOpenAI({ promptResponse });
  res.json(openAIGeneratedResponse);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
