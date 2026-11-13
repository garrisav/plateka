import { defineTool } from "@lovable.dev/mcp-js";
import { allSeries, SITE } from "../data";

export default defineTool({
  name: "list_series",
  title: "List series",
  description: "List the Plateka design series (Georgia, Italy, China, Japan, Offices) with a short description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const series = allSeries().map((s) => ({ id: s.id, title: s.title, kicker: s.kicker, lead: s.lead, designs: s.cards.length, url: `${SITE}/${s.id}` }));
    return {
      content: [{ type: "text", text: series.map((s) => `${s.id}: ${s.title} — ${s.lead} (${s.designs} designs)`).join("\n") }],
      structuredContent: { series },
    };
  },
});
