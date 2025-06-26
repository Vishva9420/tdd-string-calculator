export async function calculateSum(input: string): Promise<number> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
  
    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }
  
    const data = await response.json();
    return data.result;
  }
  