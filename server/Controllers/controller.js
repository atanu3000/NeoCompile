import { ApiResponse } from "../Utils/ApiResponse.js"
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

let language = "python";
let code = `
    import numpy as np
    a = np.arange(0, 10, 2)
    print(a)
`;


export const push_code = async (req, res) => {
    try {
        // const { code, language } = req.body;
        console.log(req.body);


        if (!code || !language) {
            return res.status(400).json(new ApiResponse(400, null, "Code and language are required"));
        }

        const promt1 = `
            You are a code compiler. Your task is to compile code based on the provided input. 
            The input will be a programming language and a code snippet. 
            You should return the compiled output as a string.
            language: ${language}
            code: ${code}
            You should not return any other text or explanation.
            Just return the exact output nothing else.`


        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promt1,
        });
        // console.log("Output: ", response.text);
        return res.status(200).json(new ApiResponse(200, response.text, "Code compiled successfully"));
    } catch (error) {
        // console.log(error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error"));

    }
}

export const explain_code = async (req, res) => {
    try {
        const { code, language } = req.body;
        const promt2 = `
            You are a code explainer. Your task is to explain the provided code snippet in detail.
            The input will be a programming language and a code snippet.
            You should return the explanation as a string.
            language: ${language}
            code: ${code}
            you have to return only the explanation in a breakdown manner but not too much lengthy.`


        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: promt2,
        });
        // console.log("Explanation: ", response.text);
        return res.status(200).json(new ApiResponse(200, response.text, "Code pushed successfully"));
    } catch (error) {
        // console.log(error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error"));

    }
}