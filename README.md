# Promotional Content Generator

A web application that uses AI to generate promotional content

## Description

The application accepts descriptions of various categories, through the use of OpenAI API it will then generate creative and engaging promotional content for that category. It can also be tailered to fit the style or need of different social media platforms, and post on behalf of the user.

## Features

- User-friendly interface to input category, description, and social media platform preferences.
- Generates promotional content based on user input using OpenAI API
- Supports multiple categories and social media platforms
- Real-time response with the generated promotional content

## Technologies

Promotional Content Generator was built using the following technologies:

- React
- Node.js
- Express
- LangChain
- OpenAI API

## Installation

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/haroldseo/InvolveAI.git
```

2. Install the dependencies:

```bash
cd InvolveAI
npm install
```

3. Set up environmental variables:

   - Create a `.env` file
   - Create and add your OpenAI API key:

   ```makefile
   OPENAI_API_KEY=your-api-key
   ```

4. Start both client and server:

Client:

```bash
npm start
```

Server:

```bash
npm run dev
```

5. Access the application in your browser at `http://localhost:3000`

### Future Features

- Incorporate LangChain Agents to action on OpenAI responses (Post on social media, send emails, etc)
- Add Testing
- Better Styling
