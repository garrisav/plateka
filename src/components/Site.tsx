import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { langSearch, useDocumentLang, useLang, useT, useTr, type Lang } from "@/lib/i18n";
import { displaySku, type Card } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { ProductNativeName, type NativeName } from "./NativeName";

const NAV = [
  ["/", "nav.home", "Главная"], ["/china", "nav.china", "Китай"], ["/georgia", "nav.georgia", "Грузия"],
  ["/italy", "nav.italy", "Италия"], ["/japan", "nav.japan", "Япония"], ["/offices", "nav.offices", "Офисы"],
  ["/order", "nav.order", "Заказать"],
] as const;

export function Layout({ theme, children }: { theme: string; children: ReactNode }) {
  useDocumentLang();
  const lang = useLang();
  const t = useT();
  const tr = useTr();
  const [open, setOpen] = useState(false);
  return (
    <div data-theme={theme}>
      <header className="top"><div className="wrap">
        <Link className="logo" to="/" search={langSearch(lang)}>Plate<span>ka</span></Link>
        <nav className={`nav${open ? " open" : ""}`} aria-label={tr("Разделы")}>
          {NAV.map(([to, k, ru]) => (
            <Link key={to} to={to} search={langSearch(lang)} activeOptions={{ exact: true, includeSearch: false }}
              activeProps={{ "aria-current": "page" }}>{t(k, ru)}</Link>
          ))}
        </nav>
        <Button className="burger" aria-expanded={open} aria-label={tr("Меню")} onClick={() => setOpen(!open)}>☰</Button>
        <div className="langs" role="group" aria-label={tr("Язык")}>
          {(["he", "ru", "en"] as Lang[]).map((l) => (
            <Link key={l} to="." search={(prev) => { const { lang: _old, ...rest } = prev; return l === "ru" ? rest : { ...rest, lang: l }; }}
              aria-pressed={lang === l} role="button">{l === "he" ? "עב" : l.toUpperCase()}</Link>
          ))}
        </div>
      </div></header>
      <main>{children}</main>
      <footer><div className="wrap">
        <div><Link className="logo" to="/" search={langSearch(lang)}>Plate<span>ka</span></Link>
          <p>{tr("Dress your plate · декор для розеток и выключателей")}</p></div>
        <p>{tr("Мы не делаем розетки и выключатели и не вмешиваемся в электрику. На сайте представлены визуализации дизайна, а не фото готового изделия.")}</p>
      </div></footer>
    </div>
  );
}

export function CatalogNote({ customOrder = false }: { customOrder?: boolean }) {
  const tr = useTr();
  return (
    <p className="mock-note catalog-note">{tr("* Цена указана за одну декоративную накладку. Накладка клеится поверх квадратной панели или обрамляет её. Штатная рамка, клавиша и механизм остаются на месте. Перед заказом пришлите фото вашей панели, чтобы мы подтвердили размер и посадку.")}{customOrder && tr(" Для индивидуального дизайна итоговая цена зависит от количества накладок и сложности знака.")}</p>
  );
}

export function ProductCard({ c, minimal = false, nativeName }: { c: Card; minimal?: boolean; nativeName?: NativeName | undefined }) {
  const lang = useLang();
  const t = useT();
  const tr = useTr();
  return (
    <article className="card" id={c.sku}>
      <div className="ph">
        {!minimal && c.tag && <span className={`tag${c.soon ? " soon" : ""}`}>{tr(c.tag)}</span>}
        <img src={imageSrc(c.img)} alt={`${tr(c.name)}, ${tr(c.kind).toLowerCase()}, ${tr("белая накладка на квадратной панели")}`} loading="lazy" width={900} height={900} />
      </div>
      <div className="body">
        <span className="sku">{displaySku(c.sku)}{!minimal && <> · <span>{tr(c.kind)}</span></>}</span>
        {!nativeName && <h3>{tr(c.name)}</h3>}{!minimal && <p className="where">{tr(c.where)}</p>}
        <ProductNativeName name={nativeName} />
        <div className="foot">
          <span className="price">₪ __</span>
          {c.soon ? <span className="where">{tr("Скоро")}</span>
            : <Button asChild variant="link" className="order-link"><Link to="/order" search={langSearch(lang, { design: c.sku })}>{t("btn.order", "Заказать")}</Link></Button>}
        </div>
      </div>
    </article>
  );
}
