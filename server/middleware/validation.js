/**
 * Robust JSON parsing utilities for LLM outputs.
 * LLMs frequently wrap JSON in markdown blocks like ```json { ... } ```
 * or include conversational preambles.
 */

export function extractJsonFromLLMResponse(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    throw new Error('Réponse LLM vide ou invalide');
  }

  let cleaned = rawText.trim();

  // Strip markdown code fences if present: ```json ... ``` or ``` ... ```
  const codeBlockMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (codeBlockMatch && codeBlockMatch[1]) {
    cleaned = codeBlockMatch[1].trim();
  }

  // If there's still text before the first { or [
  const firstBrace = cleaned.indexOf('{');
  const firstBracket = cleaned.indexOf('[');
  let startIdx = -1;

  if (firstBrace !== -1 && firstBracket !== -1) {
    startIdx = Math.min(firstBrace, firstBracket);
  } else if (firstBrace !== -1) {
    startIdx = firstBrace;
  } else if (firstBracket !== -1) {
    startIdx = firstBracket;
  }

  if (startIdx > 0) {
    cleaned = cleaned.slice(startIdx);
  }

  // Find last closing brace or bracket
  const lastBrace = cleaned.lastIndexOf('}');
  const lastBracket = cleaned.lastIndexOf(']');
  let endIdx = -1;

  if (lastBrace !== -1 && lastBracket !== -1) {
    endIdx = Math.max(lastBrace, lastBracket);
  } else if (lastBrace !== -1) {
    endIdx = lastBrace;
  } else if (lastBracket !== -1) {
    endIdx = lastBracket;
  }

  if (endIdx !== -1 && endIdx < cleaned.length - 1) {
    cleaned = cleaned.slice(0, endIdx + 1);
  }

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    // Attempt basic cleanup: remove trailing commas before closing braces/brackets
    try {
      const relaxed = cleaned
        .replace(/,\s*([}\]])/g, '$1')
        .replace(/\r/g, '');
      return JSON.parse(relaxed);
    } catch (secondErr) {
      console.error('Failed to parse JSON from LLM output:', rawText.slice(0, 300));
      throw new Error(`Échec de décodage JSON de la réponse IA: ${err.message}`);
    }
  }
}
