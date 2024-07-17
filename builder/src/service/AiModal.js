/* eslint-disable no-unused-vars */
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

// const {
// 	GoogleGenerativeAI,
// 	HarmCategory,
// 	HarmBlockThreshold,
// } = require("@google/generative-ai");

import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: "application/json",
};

export const chatSession = model.startChat({
	generationConfig,
	// safetySettings: Adjust safety settings
	// See https://ai.google.dev/gemini-api/docs/safety-settings
	history: [],
});

export async function parseGeminiResponse(response) {
	const rawResponse = await response.text(); // Get raw response as text
	try {
		return JSON.parse(rawResponse);
	} catch (error) {
		console.error("Error parsing Gemini response:", error);
		return null; // Or throw an error if you prefer
	}
}
