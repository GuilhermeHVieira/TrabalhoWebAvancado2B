import axios from 'axios';

export async function analyzeText(text: string): Promise<any> {
  const response = await axios.post('https://api.text-analysis.com/analyze', { text });
  return response.data;
}