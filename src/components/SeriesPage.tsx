import { Link } from "@tanstack/react-router";
import { Fit, Layout, ProductCard } from "./Site";
import { Button } from "@/components/ui/button";
import { langSearch, useLang, useT } from "@/lib/i18n";
import { displaySku, type Series } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";

export function SeriesPage({ s, minimal = false, imageOverrides }: { s: Series; minimal?: boolean; imageOverrides?: Record<string, string> }) {
  const lang = useLang();
  const t = useT();
  const seriesImage = (name: string) => imageSrc(imageOverrides?.[name] ?? name);
  return (
    <Layout theme={s.theme}>
      <div className="wrap hero">
        <div>
          <p className="kicker">{s.kicker}</p>
          <h1>{s.h1}</h1>
          <p className="lead">{s.lead}</p>
          <div className="actions">
            <Button asChild className="btn"><a href="#catalog">{t("btn.catalog", "Смотреть дизайны")}</a></Button>
            <Button asChild className="btn ghost"><Link to="/order" search={langSearch(lang)}>Прислать фото панели</Link></Button>
          </div>
          <Fit />
        </div>
        <div className={`hero-media${s.hero.square ? " square" : ""}`}>
          <img src={seriesImage(s.hero.img)} alt={s.hero.alt} width={s.hero.square ? 900 : 1120} height={s.hero.square ? 900 : 1400} />
        </div>
      </div>
      <section className="band" id="catalog"><div className="wrap">
        <div className="sec-head"><h2>Дизайны серии</h2>{!minimal && <p>Белый пластик, печать в 3D. Цена за одну накладку. Размер подтверждаем по фото вашей панели.</p>}</div>
        <div className="grid">{s.cards.map((c) => <ProductCard key={c.sku} c={c} minimal={minimal} />)}</div>
        {minimal && <p className="mock-note">* Цена за одну накладку. Размер подтверждаем по фото вашей панели</p>}
      </div></section>
      <section><div className="wrap">
        <div className="sec-head"><h2>{s.intTitle}</h2><p>{s.intLead}</p></div>
        <div className="interiors">
          {s.interiors?.map((i) => (
            <figure className="int" key={i.img}>
              <div className="frame"><img src={seriesImage(i.img)} alt={i.cap} loading="lazy" width={1120} height={1400} />
                {!minimal && <a className="spot-label" href={`#${i.sku}`} style={{ left: `${i.x}%`, top: `${i.y}%`, translate: "-50% 0" }}>{displaySku(i.sku)} · {i.name}</a>}</div>
              <figcaption>{minimal ? <b>{displaySku(i.sku)} · {i.name}</b> : <><b>{i.cap}</b><span>{i.sub}</span></>}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mock-note">Интерьеры созданы как визуализации для каталога. Посадку, материал и крепление по ним не проверить: это делаем по фото вашей панели.</p>
      </div></section>
      <section className="dark"><div className="wrap split">
        <div><h2>Где это уместно</h2><p>Там, где стена уже рассказывает историю, а белая панель выбивается из неё.</p></div>
        <ul className="places">{s.places.map((p) => <li key={p}>{p}</li>)}</ul>
      </div></section>
    </Layout>
  );
}
