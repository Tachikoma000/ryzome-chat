import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Get the Gemini 2.5 Flash model
export const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
  generationConfig: {
    temperature: 0.7,
    topP: 0.8,
    topK: 40,
    maxOutputTokens: 2048,
  },
});

// Generate streaming response
export async function generateStreamingResponse(prompt: string) {
  try {
    const result = await model.generateContentStream(prompt);
    return result.stream;
  } catch (error) {
    console.error('Error generating streaming response:', error);
    throw error;
  }
}

// Count tokens in a prompt (useful for monitoring usage)
export async function countTokens(prompt: string) {
  try {
    const result = await model.countTokens(prompt);
    return result.totalTokens;
  } catch (error) {
    console.error('Error counting tokens:', error);
    return 0;
  }
}
