'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating AI tech alerts.
 *
 * - generateAiTechAlert - A function that generates a concise alert about new AI technologies and trends.
 * - AiTechAlertInput - The input type for the generateAiTechAlert function.
 * - AiTechAlertOutput - The return type for the generateAiTechAlert function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTechAlertInputSchema = z.object({
  query: z
    .string()
    .describe(
      'A query to use when searching for new AI technologies and trends.'
    ),
});
export type AiTechAlertInput = z.infer<typeof AiTechAlertInputSchema>;

const AiTechAlertOutputSchema = z.object({
  alert: z.string().describe('A concise alert about new AI technologies.'),
});
export type AiTechAlertOutput = z.infer<typeof AiTechAlertOutputSchema>;

export async function generateAiTechAlert(
  input: AiTechAlertInput
): Promise<AiTechAlertOutput> {
  return generateAiTechAlertFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTechAlertPrompt',
  input: {schema: AiTechAlertInputSchema},
  output: {schema: AiTechAlertOutputSchema},
  prompt: `You are an AI assistant that provides concise alerts about new AI technologies and trends relevant to full-stack development.

  Based on the following query, generate a short and informative alert:
  Query: {{{query}}}
  Alert:`,
});

const generateAiTechAlertFlow = ai.defineFlow(
  {
    name: 'generateAiTechAlertFlow',
    inputSchema: AiTechAlertInputSchema,
    outputSchema: AiTechAlertOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
