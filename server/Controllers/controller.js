import { ApiResponse } from "../Utils/ApiResponse.js"
import { GoogleGenAI } from "@google/genai";

export const push_code = async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code || !language) {
            return res.status(400).json(new ApiResponse(400, null, "Code and language are required"));
        }

        const promt1 = `
            You are a code compiler. Your task is to compile the provided code snippet in the specified programming language.
            I will provide you with a programming language and a code snippet. And you have to check whether the code is valid syntax or not
            and if it is valid then you have to return the output of the code. And if it is not valid then you have to return the error message.
            Mind that you have to return only the output or the error message nothing else. 
            Here is the code: \n${code} and the language is ${language}`

        const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promt1,
        });

        return res.status(200).json(new ApiResponse(200, response.text, "Code compiled successfully"));
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error, "Internal server error"));

    }
}

export const explain_code = async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code || !language) {
            return res.status(400).json(new ApiResponse(400, null, "Code and language are required"));
        }

        const promt2 = `
            You are a code explainer. Your task is to explain the provided code snippet in detail.
            The input will be a programming language and a code snippet.
            You should return the explanation as a string.
            language: ${language}
            code: ${code}
            you have to return a brief explanation in a breakdown manner but not too much lengthy.`

        const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promt2,
        });

        return res.status(200).json(new ApiResponse(200, response.text, "Code pushed successfully"));
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error, "Internal server error"));

    }
}

export const suggest_code = async (req, res) => {
    try {
        const { text, language } = req.body;

        if (!text || !language) {
            return res.status(400).json(new ApiResponse(400, null, "all inputs are required"));
        }

        const promt3 = `
            suppose you are my coding assistant. I will ask you for some help to write code in ${language}.
            You have to suggest me the code based on my request. And that code should be in ${language} language
            and it should be a valid code with out any extra explanations. You may use any libraries or packages if you want.
            And you have to return only the code nothing else or may use some comments in the code if you want.
            Here is my request: \n${text}`;

        
        const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promt3,
        });
        return res.status(200).json(new ApiResponse(200, response.text, "Code suggested successfully"));
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error, "Internal server error"));

    }

}