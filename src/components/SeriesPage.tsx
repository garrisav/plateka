import { CatalogNote, Layout, ProductCard } from "./Site";
import { displaySku, type Series } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";
import { useLang, useTr } from "@/lib/i18n";
import installSteps from "@/assets/installation-steps.png.asset.json";
import { ProductNativeName, type NativeName } from "./NativeName";

export function SeriesPage({ s, minimal = false, imageOverrides, greeting, nativeNames, hideInteriorCaptions = false }: { s: Series; minimal?: boolean; imageOverrides?: Record<string, string>; greeting?: NativeName; nativeNames?: Record<string, NativeName>; hideInteriorCaptions?: boolean }) {
  const lang = useLang();
  const tr = useTr();
  const title = tr(s.title);
  const seriesHeading = lang === "en" ? `The ${title} series` : lang === "he" ? `סדרת ${title}` : `Серия «${title}»`;
  const seriesImage = (name: string) => imageSrc(imageOverrides?.[name] ?? name);
  return (
    <Layout theme={s.theme}>
      <div className={`wrap hero${greeting ? " native-series" : ""}`}>
        <div>
          <p className="kicker">{tr(s.kicker)}</p>
          <h1>{tr(s.h1)}</h1>
          {greeting && <div className="series-greeting">
            <p className="greeting-text" lang={greeting.lang} dir="ltr">{greeting.text}<sup className="greeting-asterisk">*</sup></p>
          </div>}
        </div>
        <figure className={`hero-media${s.hero.square ? " square" : ""}`}>
          <img src={seriesImage(s.hero.img)} alt={tr(s.hero.alt)} width={s.hero.square ? 900 : 1120} height={s.hero.square ? 900 : 1400} />
          {greeting && <figcaption className="greeting-translation">* {tr(greeting.translation)}</figcaption>}
        </figure>
      </div>
      <section className="band" id="catalog"><div className="wrap">
        <div className="sec-head"><h2>{nativeNames ? seriesHeading : tr("Дизайны серии")}</h2></div>
        <div className="grid">{s.cards.map((c) => <ProductCard key={c.sku} c={c} minimal={minimal} nativeName={nativeNames?.[c.sku]} />)}</div>
        <CatalogNote />
      </div></section>
      <section><div className="wrap">
        <div className="sec-head"><h2>{tr(s.intTitle)}</h2></div>
        <div className="interiors">
          {s.interiors?.map((i) => (
            <figure className="int" key={i.img}>
              <div className="frame"><img src={seriesImage(i.img)} alt={tr(i.cap)} loading="lazy" width={1120} height={1400} />
                {!minimal && <a className="spot-label" href={`#${i.sku}`} style={{ left: `${i.x}%`, top: `${i.y}%`, translate: "-50% 0" }}>{displaySku(i.sku)} · {tr(i.name)}</a>}</div>
              {!hideInteriorCaptions && <figcaption className={nativeNames?.[i.sku] ? "native-caption" : undefined}>
                {nativeNames?.[i.sku] ? <b className="sku">{displaySku(i.sku)}</b> : minimal ? <b>{displaySku(i.sku)} · {tr(i.name)}</b> : <><b>{tr(i.cap)}</b><span>{tr(i.sub)}</span></>}
                <ProductNativeName name={nativeNames?.[i.sku]} />
              </figcaption>}
            </figure>
          ))}
        </div>
        <p className="mock-note">{tr("Интерьеры созданы как визуализации для каталога. Посадку, материал и крепление по ним не проверить: это делаем по фото вашей панели.")}</p>
      </div></section>
      <section className="dark"><div className="wrap split">
        <div><h2>{tr("Где это уместно")}</h2><p>{tr("Там, где стена уже рассказывает историю, а белая панель выбивается из неё.")}</p></div>
        <ul className="places">{s.places.map((p) => <li key={p}>{tr(p)}</li>)}</ul>
      </div></section>
      <section className="install"><div className="wrap">
        <div className="sec-head"><h2>{tr("Как установить")}</h2></div>
        <img src={installSteps.url} alt={tr("Иллюстрация установки накладки в три шага")} loading="lazy" width={1330} height={600} style={{ width: "70%", height: "auto", display: "block", margin: "0 auto", mixBlendMode: "multiply" }} />
        <ol className="steps">
          {["Снимите защитную плёнку с клейких полосок на обратной стороне накладки.", "Наденьте накладку на штатную рамку так, чтобы она полностью её закрыла.", "Прижмите по краям на несколько секунд. Розетка или клавиша остаются открытыми и работают как прежде."].map((x) => <li className="step" key={x}><p>{tr(x)}</p></li>)}
        </ol>
      </div></section>
    </Layout>
  );
}
