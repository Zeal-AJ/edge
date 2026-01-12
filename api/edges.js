// api/edges.js
export async function getDailyEdges() {
  const response = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer INSERT_YOUR_GROK_API_KEY_HERE", // get free key at https://x.ai/api
    },
    body: JSON.stringify({
      model: "grok-beta",
      messages: [{
        role: "system",
        content: `You are Edge — the sharpest AI signal on earth.
Deliver exactly 3 cards. No intro. No conclusion.
Tone: direct, elite, zero bullshit. Like Naval + Huberman.
Topics today:
1. Leverage & First Principles
2. Money & Power (crypto alpha, indie deals, silent wealth)
3. Peak Performance (energy, focus, testosterone)

Each card must have:
- One bold sentence (the edge)
- One piece of fresh proof (today’s data, on-chain, study, leak)
- One immediate action

Format exactly:
EDGE #1 — [Topic]
[bold edge]
Proof: [fresh data]
Action: [command]`
      }],
      temperature: 0.8,
      max_tokens: 800
    })
  });

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Parse the 3 cards
  const cards = content.split("EDGE #").slice(1).map(block => {
    const lines = block.trim().split("\n");
    return {
      title: lines[0].trim(),
      edge: lines[1]?.trim() || "",
      proof: lines.find(l => l.startsWith("Proof:"))?.replace("Proof:", "").trim() || "",
      action: lines.find(l => l.startsWith("Action:"))?.replace("Action:", "").trim() || ""
    };
  });

  return cards;
}