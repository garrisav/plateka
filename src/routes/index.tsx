import { createFileRoute, Link } from "@tanstack/react-router";
import { CatalogNote, Layout } from "@/components/Site";
import { langSearch, useLang, useT, useTr } from "@/lib/i18n";
import { pageHead } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";
import installSteps from "@/assets/installation-steps-color.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead("Декор для розеток и выключателей"),
  component: Home,
});

function Home() {
  const lang = useLang();
  const t = useT();
  const tr = useTr();
  const s = langSearch(lang);
  const tiles = [
    { to: "/georgia", k: "nav.georgia", ru: "Грузия", img: "home-georgia-scaled-interior.jpg", sub: "Лоза, плетёнка, аркада, солнце", wide: true },
    { to: "/italy", k: "nav.italy", ru: "Италия", img: "home-italy-scaled-interior.jpg", sub: "Аканф, олива, готика, лилия", wide: true },
    { to: "/china", k: "nav.china", ru: "Китай", img: "home-china-scaled-interior.jpg", sub: "Облака, меандр, пион" },
    { to: "/japan", k: "nav.japan", ru: "Япония", img: "home-japan-scaled-interior.jpg", sub: "Бамбук" },
    { to: "/offices", k: "nav.offices", ru: "Офисы", img: "of-2.jpg", sub: "Под айдентику команды" },
  ] as const;
  return (
    <Layout theme="georgia">
      <div className="wrap hero">
        <div>
          <p className="kicker">{tr("Каталог · осень 2026")}</p>
           <h1>{tr("Декор для розеток и выключателей")}</h1>
           <p className="lead">{tr("Декоративные накладки для розеток и выключателей. Клеятся поверх штатной панели или обрамляют её. Без электрика и без замены фурнитуры.")}</p>
        </div>
        <div className="hero-media"><img src={imageSrc("home-china-tea-scaled-interior.jpg")} alt={tr("Визуализация чайной комнаты с зелёной стеной и розеткой «Облака»")} width={1120} height={1408} /></div>
      </div>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>{tr("Куда поставить")}</h2></div>
        <div className="tiles">
          {tiles.map((x) => (
            <Link key={x.to} className={`tile${"wide" in x ? " wide" : ""}`} to={x.to} search={s}>
               <img src={imageSrc(x.img)} alt="" loading="lazy" />
              <span className="t"><b>{t(x.k, x.ru)}</b><small>{tr(x.sub)}</small></span>
            </Link>
          ))}
        </div>
        <CatalogNote />
      </div></section>
      <section><div className="wrap split">
         <img className="context-image" src={imageSrc("home-italy-scaled-interior.jpg")} alt={tr("Визуализация розетки «Олива» на стене с натюрмортом у деревянного буфета")} loading="lazy" width={1120} height={1400} />
        <div>
          <h2>{tr("И ещё много где")}</h2>
           <p className="lead">{tr("Ресторан лишь один из сценариев. Те же рамки работают везде, где интерьер собран с вниманием к деталям.")}</p>
           <ul className="places">
            {["Винный бар", "Пекарня", "Гостевой дом", "Прихожая", "Столовая дома", "Переговорная"].map((p) => <li key={p}>{tr(p)}</li>)}
          </ul>
        </div>
      </div></section>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>{tr("Как это работает")}</h2></div>
        <img src={installSteps.url} alt={tr("Иллюстрация установки накладки в три шага")} loading="lazy" width={1859} height={846} style={{ width: "100%", maxWidth: 760, height: "auto", display: "block", borderRadius: 4 }} />
        <ol className="steps">
          {["Снимите защитную плёнку с клейких полосок на обратной стороне накладки.", "Наденьте накладку на штатную рамку так, чтобы она полностью её закрыла.", "Прижмите по краям на несколько секунд. Розетка или клавиша остаются открытыми и работают как прежде."].map((x) => <li className="step" key={x}><p>{tr(x)}</p></li>)}
        </ol>
      </div></section>
    </Layout>
  );
}
