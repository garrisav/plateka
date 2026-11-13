import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allSeries, toCard } from "../data";

export default defineTool({
  name: "get_design",
  title: "Get design",
  description: "Get one design by SKU (e.g. GE-01) with its series, image and order link.",
  inputSchema: { sku: z.string().min(2).max(10).describe("Design SKU, e.g. GE-01.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ sku }) => {
    const want = sku.toUpperCase();
    for (const s of allSeries()) {
      const c = s.cards.find((x) => x.sku === want);
      if (c) {
        const design = toCard(c, s.id);
        return { content: [{ type: "text", text: `${design.sku} · ${design.name} (${design.kind}), series ${s.title}. ${design.where}. Order: ${design.orderUrl ?? "coming soon"}` }], structuredContent: { design } };
      }
    }
    throw new ToolError(`No design with SKU ${sku}.`);
  },
});
