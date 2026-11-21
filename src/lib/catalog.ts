export type Card = { sku: string; name: string; kind: string; where: string; img: string; tag?: string; soon?: boolean };
export type Interior = { img: string; x: number; y: number; sku: string; name: string; cap: string; sub: string };
export type Series = {
  theme: "georgia" | "italy" | "china" | "japan";
  title: string; kicker: string; h1: string; lead: string;
  hero: { img: string; alt: string; square?: boolean };
  cards: Card[]; interiors?: Interior[];
  intTitle: string; intLead: string; places: string[];
};

export const SERIES: Record<Series["theme"], Series> = {
  georgia: {
    theme: "georgia", title: "Грузинский стол", kicker: "Серия 01 · Грузия", h1: "Грузинский стол",
    lead: "Лоза, плетёнка, арки и солнечные розетки. Орнаменты, которые продолжают тёплую штукатурку, глиняные кувшины и картины на стене.",
    hero: { img: "ge-int-plug.jpg", alt: "Розетка в рамке «Лоза» рядом с картиной застолья в духе Пиросмани" },
    cards: [
      { sku: "GE-01", name: "Лоза", kind: "Розетка", where: "У стола, рядом с винной полкой", img: "ge-loza.jpg", tag: "Вариант A" },
      { sku: "GE-02", name: "Плетёнка", kind: "Розетка", where: "Коридор, барная стойка", img: "ge-pletenka.jpg", tag: "Вариант B" },
      { sku: "GE-03", name: "Аркада", kind: "Выключатель", where: "Арочные ниши, вход в зал", img: "ge-arkada.jpg" },
      { sku: "GE-04", name: "Солнце", kind: "Выключатель", where: "Банкетная комната, прихожая", img: "ge-solntse.jpg" },
    ],
    interiors: [
      { img: "ge-int-plug.jpg", x: 78.5, y: 56, sku: "GE-01", name: "Лоза", cap: "Розетка «Лоза» у стола", sub: "Под картиной с застольем" },
      { img: "ge-int-switch.jpg", x: 69, y: 46.5, sku: "GE-04", name: "Солнце", cap: "Выключатель «Солнце» у прохода", sub: "Рядом с ланью на чёрной клеёнке" },
    ],
    intTitle: "В интерьере",
    intLead: "Интерьеры навеяны картинами Нико Пиросмани: чёрная клеёнка, застолье, лань. Рамка, единственная светлая деталь на стене, притягивает взгляд.",
    places: ["Грузинский ресторан", "Винный бар", "Хинкальная", "Гостевой дом", "Столовая дома", "Банкетный зал"],
  },
  italy: {
    theme: "italy", title: "Итальянская тратория", kicker: "Серия 02 · Италия", h1: "Итальянская тратория",
    lead: "Аканф, олива, готическое окно и лилия. Спокойные белые рамки для стен цвета охры и выцветшей штукатурки.",
    hero: { img: "italy-entry-interior.jpg", alt: "Выключатель «Аканф» на розовой стене тратории рядом с натюрмортом" },
    cards: [
      { sku: "IT-01", name: "Аканф", kind: "Выключатель", where: "Вход в зал, лепной потолок", img: "it-akanf.jpg" },
      { sku: "IT-02", name: "Олива", kind: "Розетка", where: "Кухня, стена у буфета", img: "it-oliva.jpg" },
      { sku: "IT-03", name: "Готика", kind: "Розетка", where: "Винный погреб, коридор", img: "it-gotika.jpg" },
      { sku: "IT-04", name: "Лилия", kind: "Выключатель", where: "Прихожая, спальня", img: "it-liliya.jpg" },
    ],
    interiors: [
      { img: "italy-buffet-interior.jpg", x: 75, y: 58, sku: "IT-02", name: "Олива", cap: "Розетка «Олива» у буфета", sub: "Оливковая штукатурка, керамика и натюрморт" },
      { img: "italy-entry-interior.jpg", x: 67, y: 51, sku: "IT-01", name: "Аканф", cap: "Выключатель «Аканф» у входа", sub: "Розовая стена, мрамор и тёмное дерево" },
    ],
    intTitle: "В интерьере",
    intLead: "Натюрморты в духе Джорджо Моранди, оливковая штукатурка, розовые стены и старый орех. Белый рельеф продолжает листья на керамике и резные детали тратории.",
    places: ["Тратория", "Пиццерия", "Кофейня", "Винотека", "Кухня дома", "Прихожая"],
  },
  china: {
    theme: "china", title: "Китайский зал", kicker: "Серия 03 · Китай", h1: "Китайский зал",
    lead: "Облака, меандр, пион и бамбук. Рамки для залов с лаком, тёмным деревом и красным акцентом.",
    hero: { img: "china-tea-interior.jpg", alt: "Розетка «Облака» на нефритовой стене чайной с пейзажем и фарфором" },
    cards: [
      { sku: "CN-01", name: "Облака", kind: "Розетка", where: "Чайная комната, зал", img: "cn-oblaka-v2" },
      { sku: "CN-02", name: "Меандр", kind: "Розетка", where: "Коридор, барная стойка", img: "cn-meandr-v2" },
      { sku: "CN-04", name: "Бамбук", kind: "Розетка", where: "Чайная комната, прихожая", img: "cn-bamboo-v2" },
    ],
    interiors: [
      { img: "china-tea-interior.jpg", x: 74, y: 58, sku: "CN-01", name: "Облака", cap: "Розетка «Облака» в чайной", sub: "Нефритовая стена, пейзаж и селадон" },
      { img: "china-entry-interior.jpg", x: 64, y: 49, sku: "CN-02", name: "Меандр", cap: "Розетка «Меандр» у входа", sub: "Красный лак, резное дерево и цветочная живопись" },
    ],
    intTitle: "В интерьере",
    intLead: "Пейзажи эпохи Сун и цветы в духе Ци Байши, резное дерево, фарфор и тёплый свет фонарей. Облака на нефритовой стене и пион на красной перекликаются с живописью.",
    places: ["Китайский ресторан", "Чайная", "Бар димсам", "Кабинет", "Гостиная", "Прихожая"],
  },
  japan: {
    theme: "japan", title: "Японская стойка", kicker: "Серия 04 · Япония", h1: "Японская стойка",
    lead: "Бамбук и чистые линии. Рамки для светлого дерева, бумаги сёдзи и неяркого света.",
    hero: { img: "japan-counter-interior.jpg", alt: "Выключатель «Бамбук» на стене цвета индиго у японской стойки" },
    cards: [
      { sku: "JP-01", name: "Бамбук", kind: "Выключатель", where: "Вход, коридор с сёдзи", img: "jp-bambuk.jpg" },
      { sku: "JP-02", name: "В работе", kind: "Розетка", where: "Новый дизайн серии", img: "jp-bambuk.jpg", tag: "Скоро", soon: true },
    ],
    interiors: [
      { img: "japan-counter-interior.jpg", x: 66, y: 49, sku: "JP-01", name: "Бамбук", cap: "Выключатель «Бамбук» у стойки", sub: "Индиго, кедр и гравюра в духе Хиросигэ" },
      { img: "japan-shoji-interior.jpg", x: 64, y: 50, sku: "JP-01", name: "Бамбук", cap: "Выключатель «Бамбук» рядом с сёдзи", sub: "Моховая штукатурка, керамика и бумажный свет" },
    ],
    intTitle: "В интерьере",
    intLead: "Гравюры в духе Хиросигэ и Хокусая, кедровая стойка, керамика и свет сквозь сёдзи. Белый бамбук связывает стены цвета индиго и мха с природными деталями комнаты.",
    places: ["Суши бар", "Рамен бар", "Чайная", "Спальня", "Кабинет", "Прихожая"],
  },
};

export const OFFICE_CARDS: Card[] = [
  { sku: "OF-01", name: "Волна", kind: "Розетка", where: "Опенспейс, кухня", img: "of-1.jpg", tag: "Пример" },
  { sku: "OF-02", name: "Шестерня", kind: "Выключатель", where: "Переговорная", img: "of-2.jpg", tag: "Пример" },
  { sku: "OF-03", name: "Кубики", kind: "Розетка", where: "Зона отдыха", img: "of-3.jpg", tag: "Пример" },
  { sku: "OF-04", name: "Орбиты", kind: "Выключатель", where: "Ресепшен", img: "of-4.jpg", tag: "Пример" },
];

export const ORDER_OPTIONS: [string, string][] = [
  ["GE-01", "Лоза"], ["GE-02", "Плетёнка"], ["GE-03", "Аркада"], ["GE-04", "Солнце"],
  ["IT-01", "Аканф"], ["IT-02", "Олива"], ["IT-03", "Готика"], ["IT-04", "Лилия"],
  ["CN-01", "Облака"], ["CN-02", "Меандр"], ["CN-04", "Бамбук"], ["JP-01", "Бамбук"], ["OF", "Под айдентику офиса"],
];

export const ORDER_EMAIL = "REPLACE_WITH_YOUR_EMAIL";
export const WHATSAPP_URL = "https://wa.me/972XXXXXXXXX";

export function buildOrderMailto(f: { design: string; qty: string; name: string; phone: string; msg: string }) {
  const body = `Дизайн: ${f.design}\nКоличество: ${f.qty}\nИмя: ${f.name}\nТелефон: ${f.phone}\nКомментарий: ${f.msg}`;
  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent("Заявка Plateka: " + f.design)}&body=${encodeURIComponent(body)}`;
}

export const displaySku = (sku: string) => sku.replaceAll("-", " ");

export const pageHead = (title: string, description = "Декоративные накладки для розеток и выключателей") => ({
  meta: [
    { title: `${title} | Plateka` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Plateka` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
