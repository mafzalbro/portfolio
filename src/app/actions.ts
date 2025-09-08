"use server";

import { generateAiTechAlert } from "@/ai/flows/ai-tech-alerts";
import type { AiTechAlertInput, AiTechAlertOutput } from "@/ai/flows/ai-tech-alerts";

type ActionResult = 
  | { success: true; data: AiTechAlertOutput }
  | { success: false; error: string };

export async function getAiTechAlert(input: AiTechAlertInput): Promise<ActionResult> {
  try {
    const result = await generateAiTechAlert(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getAiTechAlert action:", error);
    return { success: false, error: "Failed to generate AI alert. Please try again later." };
  }
}
