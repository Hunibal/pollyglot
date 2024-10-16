# Pollyglot Translator App

Pollyglot is a web application that allows users to translate text into different languages using OpenAI's GPT model. Built with React and Tailwind CSS, it provides an intuitive interface for users to enter text, select a target language, and view the translated output.

## Features

- Translate text into various languages.
- User-friendly interface with real-time feedback.
- Dark mode support for improved accessibility.
- Built with Vite for fast development and deployment.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenAI API**: GPT model for translation.
- **Vite**: Fast and optimized build tool for modern web projects.
- **TypeScript**: Adds static typing to JavaScript.

  
## Installation

### Prerequisites

- Make sure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the repository**:
   Clone the project repository from GitHub to your local machine.
   ```bash
   git clone https://github.com/hunibal/pollyglot.git
   cd pollyglot

2. **Install dependencies**:
   Install the required npm packages.
   ```bash
   npm install

3. **Set up environment variables**
	•	Create a .env file in the root directory of the project.
	•	Add your OpenAI API key to the .env file using the following format:
    VITE_OPENAI_API_KEY=your_openai_api_key_here

4.	**Run the app locally:**
    Start the development server to run the app on your local machine.
  	npm run dev

## Usage

	1.	Enter Text:
	    •	Type the text you want to translate in the provided text area.
	2.	Select Language:
	    •	Choose the target language from the available options.
	3.	Translate:
	    •	Click the Translate button to generate the translation using OpenAI’s GPT model.
	4.	Restart:
	    •	Use the Restart button to clear the form and input new text for translation.

## Project Structure

	•	src/components: Contains all React components, including Header, Input, and Result.
	•	src/App.tsx: Main application component with routing and state management.
	•	src/styles: CSS files and Tailwind configuration.
	•	src/assets: Images and other assets used in the app.
