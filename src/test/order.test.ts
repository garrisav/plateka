import { describe, expect, it } from "vitest";
import { buildOrderMailto } from "@/lib/catalog";

describe("order mailto", () => {
  it("puts the design SKU in the subject and all fields in the body", () => {
    const url = buildOrderMailto({ design: "GE-01", qty: "2", name: "Ann", phone: "050", msg: "hi" });
    expect(url.startsWith("mailto:")).toBe(true);
    const q = new URLSearchParams(url.split("?")[1]);
    expect(q.get("subject")).toBe("Заявка Plateka: GE-01");
    expect(q.get("body")).toBe("Дизайн: GE-01\nКоличество: 2\nИмя: Ann\nТелефон: 050\nКомментарий: hi");
  });
});
