import { CatalogNote, Layout, ProductCard } from "./Site";
import { displaySku, type Series } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";
import { ProductNativeName, type NativeName } from "./NativeName";

export function SeriesPage({ s, minimal = false, imageOverrides, greeting, nativeNames, hideInteriorCaptions = false }: { s: Series; minimal?: boolean; imageOverrides?: Record<string, string>; greeting?: NativeName; nativeNames?: Record<string, NativeName>; hideInteriorCaptions?: boolean }) {
  const seriesImage = (name: string) => imageSrc(imageOverrides?.[name] ?? name);
  return (
    <Layout theme={s.theme}>
      <div className={`wrap hero${greeting ? " native-series" : ""}`}>
        <div>
          <p className="kicker">{s.kicker}</p>
          <h1>{s.h1}</h1>
          {greeting && <div className="series-greeting">
            <p className="greeting-text" lang={greeting.lang} dir="ltr">{greeting.text}<sup className="greeting-asterisk">*</sup></p>
          </div>}
        </div>
        <figure className={`hero-media${s.hero.square ? " square" : ""}`}>
          <img src={seriesImage(s.hero.img)} alt={s.hero.alt} width={s.hero.square ? 900 : 1120} height={s.hero.square ? 900 : 1400} />
          {greeting && <figcaption className="greeting-translation">* {greeting.translation}</figcaption>}
        </figure>
      </div>
      <section className="band" id="catalog"><div className="wrap">
        <div className="sec-head"><h2>{nativeNames ? `Серия «${s.title}»` : "Дизайны серии"}</h2></div>
        <div className="grid">{s.cards.map((c) => <ProductCard key={c.sku} c={c} minimal={minimal} nativeName={nativeNames?.[c.sku]} />)}</div>
        <CatalogNote />
      </div></section>
      <section><div className="wrap">
        <div className="sec-head"><h2>{s.intTitle}</h2></div>
        <div className="interiors">
          {s.interiors?.map((i) => (
            <figure className="int" key={i.img}>
              <div className="frame"><img src={seriesImage(i.img)} alt={i.cap} loading="lazy" width={1120} height={1400} />
                {!minimal && <a className="spot-label" href={`#${i.sku}`} style={{ left: `${i.x}%`, top: `${i.y}%`, translate: "-50% 0" }}>{displaySku(i.sku)} · {i.name}</a>}</div>
              {!hideInteriorCaptions && <figcaption className={nativeNames?.[i.sku] ? "native-caption" : undefined}>
                {nativeNames?.[i.sku] ? <b className="sku">{displaySku(i.sku)}</b> : minimal ? <b>{displaySku(i.sku)} · {i.name}</b> : <><b>{i.cap}</b><span>{i.sub}</span></>}
                <ProductNativeName name={nativeNames?.[i.sku]} />
              </figcaption>}
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
