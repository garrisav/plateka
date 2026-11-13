import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allSeries, toCard } from "../data";

export default defineTool({
  name: "list_designs",
  title: "List designs",
  description: "List decorative outlet/switch cover designs, optionally for one series, with SKU, type, image and order link.",
  inputSchema: {
    series: z.enum(["georgia", "italy", "china", "japan", "offices"]).optional().describe("Series id; omit for all designs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ series }) => {
    const list = allSeries().filter((s) => !series || s.id === series);
    if (!list.length) throw new ToolError("Unknown series.");
    const designs = list.flatMap((s) => s.cards.map((c) => toCard(c, s.id)));
    return {
      content: [{ type: "text", text: designs.map((d) => `${d.sku} · ${d.name} (${d.kind}) — ${d.where}${d.available ? "" : " [скоро]"}`).join("\n") }],
      structuredContent: { designs },
    };
  },
});
