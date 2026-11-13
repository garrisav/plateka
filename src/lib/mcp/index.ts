import { defineMcp } from "@lovable.dev/mcp-js";
import listSeries from "./tools/list-series";
import listDesigns from "./tools/list-designs";
import getDesign from "./tools/get-design";

export default defineMcp({
  name: "plateka",
  title: "Plateka",
  version: "0.1.0",
  instructions: "Read-only catalog of Plateka decorative covers for Israeli square outlets and switches. List series, list designs, or look up a design by SKU to get its image and order link.",
  tools: [listSeries, listDesigns, getDesign],
});
