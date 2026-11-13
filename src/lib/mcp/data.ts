import { OFFICE_CARDS, SERIES, type Card } from "@/lib/catalog";

export const SITE = "https://plateka.lovable.app";
export const toCard = (c: Card, series: string) => ({
  sku: c.sku, name: c.name, kind: c.kind, where: c.where, series,
  available: !c.soon, image: `${SITE}/img/${c.img}`,
  orderUrl: c.soon ? null : `${SITE}/order?design=${c.sku}`,
});
export const allSeries = () => [
  ...Object.values(SERIES).map((s) => ({ id: s.theme, title: s.title, kicker: s.kicker, lead: s.lead, cards: s.cards })),
  { id: "offices", title: "Офисы", kicker: "Серия 05 · Офисы", lead: "Рамки под айдентику офиса: знак, цвет и шрифт команды.", cards: OFFICE_CARDS },
];
