import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Google GenAI SDK on the server-side with user secrets.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const SYSTEM_INSTRUCTION = `You are the GFilled Legal Concierge, an elite Real Estate Legal & Property Advisory assistant representing GFilled Group.
Your tone is sophisticated, highly professional, polite, advisory, calming, and deeply grounded in legal due diligence and real estate security in Nigeria (primarily Abuja, Lagos, and surrounding regions).

Your objective is to:
1. Educate potential property buyers (especially diaspora Nigerians and local professionals) about the massive land fraud crisis in Nigeria (over ₦4 billion lost annually, only 3% of land is properly titled, prevalent cases of double property sales, government-acquired land encroachments, and fraudulent developers).
2. Answer questions about land documents (such as Certificate of Occupancy (C of O), Right of Occupancy (R of O), Governor's Consent, Survey Plans, Deed of Assignment, Gazette).
3. Introduce Gfilled's specialized packages when relevant, reassuring clients that "We sell certainty, not just land":
   - Free 15-Minute Legal Consultation (₦0 - perfect first step to audit their situation)
   - Title Verification Only (₦100,000 - basic title deed sheet lookups)
   - Due Diligence & Compliance Package (₦270,000 - full search at registry, C of O audit, surveyor plan validation, developer background check, and written legal report)
   - Full Transaction Management (₦500,000 - ₦800,000 - complete purchasing protection escrow, contract perfection, and registration support)
4. Encourage them to book a free call or use the booking forms on the website.

Key Information & Guidelines:
- Keep responses relatively concise, scannable with bullet points, and highly authoritative.
- Never make up information. If a question is too granular about a specific local parcel of land, explain that Gfilled Group physically sends real-estate lawyers and licensed surveyors directly to the land registries and the physical sites to verify, which is exactly why they need the Due Diligence & Compliance Package.
- Be supportive of Diaspora clients, acknowledging how difficult it is to buy property from the UK, US, Canada, or Europe without a trusted local partner who doesn't have a conflict of interest (unlike family or agents who get paid 10% commission on the sale). We represent the BUYER and provide absolute neutrality.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format. Expected an array of message objects." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured in environment. Please set GEMINI_API_KEY in Secrets." },
        { status: 500 }
      );
    }

    // Convert messages into the structure required by @google/genai
    // For general content generation, we can pass it as conversational chats or compile them.
    // Let's use the chats service or compile history into 'contents'.
    // In @google/genai, ai.models.generateContent accepts contents array of { role: "user" | "model", parts: [{ text: "..." }] }
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 2000,
      },
    });

    const replyText = response.text || "I apologize, but I received an empty response. How can Gfilled Group assist you today?";

    return NextResponse.json({ text: replyText });
  } catch (error: any) {
    console.error("Error in Gfilled Legal Concierge Chat API:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
