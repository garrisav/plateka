import { describe, expect, it } from "vitest";
import { buildOrderMailto, ORDER_OPTIONS, SERIES } from "@/lib/catalog";

describe("order mailto", () => {
  it("puts the design SKU in the subject and all fields in the body", () => {
    const url = buildOrderMailto({ design: "GE-01", qty: "2", name: "Ann", phone: "050", msg: "hi" });
    expect(url.startsWith("mailto:")).toBe(true);
    const q = new URLSearchParams(url.split("?")[1]);
    expect(q.get("subject")).toBe("Заявка Plateka: GE-01");
    expect(q.get("body")).toBe("Дизайн: GE-01\nКоличество: 2\nИмя: Ann\nТелефон: 050\nКомментарий: hi");
  });

  it("allows ordering the three current Chinese designs using their stable identifiers", () => {
    const ids = ["CN-01", "CN-02", "CN-04"];
    expect(ORDER_OPTIONS.some(([value]) => value === "CN-03")).toBe(false);
    expect(SERIES.china.cards.map((card) => card.sku)).toEqual(ids);
    for (const id of ids) {
      expect(ORDER_OPTIONS.some(([value]) => value === id)).toBe(true);
      expect(SERIES.china.cards.find((card) => card.sku === id)?.soon).not.toBe(true);
      const url = buildOrderMailto({ design: id, qty: "1", name: "Ann", phone: "050", msg: "" });
      expect(new URLSearchParams(url.split("?")[1]).get("subject")).toBe(`Заявка Plateka: ${id}`);
    }
  });

  it("keeps all four updated Italian designs orderable with their existing identifiers", () => {
    const ids = ["IT-01", "IT-02", "IT-03", "IT-04"];
    expect(SERIES.italy.cards.map((card) => card.sku)).toEqual(ids);
    for (const id of ids) {
      expect(ORDER_OPTIONS.some(([value]) => value === id)).toBe(true);
      expect(SERIES.italy.cards.find((card) => card.sku === id)?.soon).not.toBe(true);
      const url = buildOrderMailto({ design: id, qty: "1", name: "Ann", phone: "050", msg: "" });
      expect(new URLSearchParams(url.split("?")[1]).get("subject")).toBe(`Заявка Plateka: ${id}`);
    }
  });
});
