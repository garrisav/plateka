import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Fit, Layout, ProductCard } from "./Site";
import { langSearch, useLang, useT } from "@/lib/i18n";
import type { Series } from "@/lib/catalog";

export function SeriesPage({ s }: { s: Series }) {
  const lang = useLang();
  const t = useT();
  return (
    <Layout theme={s.theme}>
      <div className="wrap hero">
        <div>
          <p className="kicker">{s.kicker}</p>
          <h1>{s.h1}</h1>
          <p className="lead">{s.lead}</p>
          <div className="actions">
            <a className="btn" href="#catalog">{t("btn.catalog", "Смотреть дизайны")}</a>
            <Link className="btn ghost" to="/order" search={langSearch(lang)}>Прислать фото панели</Link>
          </div>
          <Fit />
        </div>
        <div className="hero-media">
          <img src={`/img/${s.hero.img}`} alt={s.hero.alt} width={s.hero.square ? 900 : 1122} height={s.hero.square ? 900 : 1402}
            style={s.hero.square ? { aspectRatio: "1/1" } : undefined} />
        </div>
      </div>
      <section className="band" id="catalog"><div className="wrap">
        <div className="sec-head"><h2>Дизайны серии</h2><p>Белый пластик, 3D-печать. Цена за одну накладку. Размер подтверждаем по фото вашей панели.</p></div>
        <div className="grid">{s.cards.map((c) => <ProductCard key={c.sku} c={c} />)}</div>
      </div></section>
      <section><div className="wrap">
        <div className="sec-head"><h2>{s.intTitle}</h2><p>{s.intLead}</p></div>
        <div className="interiors">
          {s.interiors?.map((i) => (
            <figure className="int" key={i.sku}>
              <div className="frame"><img src={`/img/${i.img}`} alt={i.cap} loading="lazy" width={1122} height={1402} />
                <a className="spot-label" href={`#${i.sku}`} style={{ left: `${i.x}%`, top: `${i.y}%`, translate: "-50% 0" }}>{i.sku} · {i.name}</a></div>
              <figcaption><b>{i.cap}</b><span>{i.sub}</span></figcaption>
            </figure>
          ))}
          {s.phInteriors?.map((p) => (
            <div className="ph-int" key={p.title + p.kind} style={{ "--ph-bg": p.bg, "--ph-pattern": p.pattern } as CSSProperties}>
              <img className="mini" src={`/img/${p.mini}`} alt="" loading="lazy" />
              <span className="lbl">Интерьер в работе</span>
              <span className="ttl">{p.title}</span><span className="src">{p.kind} · {p.src}</span>
            </div>
          ))}
        </div>
        <p className="mock-note">Интерьеры — визуализации для каталога. Посадку, материал и крепление по ним не проверить: это делаем по фото вашей панели.</p>
      </div></section>
      <section className="dark"><div className="wrap split">
        <div><h2>Где это уместно</h2><p>Там, где стена уже рассказывает историю, а белая панель выбивается из неё.</p></div>
        <ul className="places">{s.places.map((p) => <li key={p}>{p}</li>)}</ul>
      </div></section>
    </Layout>
  );
}
