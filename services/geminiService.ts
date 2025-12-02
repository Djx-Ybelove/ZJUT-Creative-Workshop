import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not set in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCreativeIdea = async (topic: string): Promise<string> => {
  const client = getClient();
  if (!client) return "API Key unavailable. Please check configuration.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a creative director for a university merchandise workshop (ZJUT). 
      The user wants to design a product based on this theme: "${topic}".
      Provide a short, inspiring design concept description (max 50 words) that captures the essence of the university spirit and the user's theme. 
      Focus on visual elements, colors, and metaphors.`,
    });
    
    return response.text || "Could not generate an idea at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while brainstorming. Please try again.";
  }
};