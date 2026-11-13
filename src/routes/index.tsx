import { createFileRoute, Link } from "@tanstack/react-router";
import { CatalogNote, Layout } from "@/components/Site";
import { langSearch, useLang, useT } from "@/lib/i18n";
import { pageHead } from "@/lib/catalog";
import { imageSrc } from "@/lib/media";

export const Route = createFileRoute("/")({
  head: () => pageHead("Декор для розеток и выключателей"),
  component: Home,
});

function Home() {
  const lang = useLang();
  const t = useT();
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
          <p className="kicker">Каталог · осень 2026</p>
           <h1>Декор для розеток и выключателей</h1>
           <p className="lead">Декоративные накладки для розеток и выключателей. Клеятся поверх штатной панели или обрамляют её. Без электрика и без замены фурнитуры.</p>
        </div>
        <div className="hero-media"><img src={imageSrc("home-dining-scaled-interior.jpg")} alt="Визуализация столовой с ботанической росписью и выключателем «Солнце»" width={1120} height={1400} /></div>
      </div>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Куда поставить</h2></div>
        <div className="tiles">
          {tiles.map((x) => (
            <Link key={x.to} className={`tile${"wide" in x ? " wide" : ""}`} to={x.to} search={s}>
               <img src={imageSrc(x.img)} alt="" loading="lazy" />
              <span className="t"><b>{t(x.k, x.ru)}</b><small>{x.sub}</small></span>
            </Link>
          ))}
        </div>
        <CatalogNote />
      </div></section>
      <section><div className="wrap split">
         <img className="context-image" src={imageSrc("home-italy-scaled-interior.jpg")} alt="Визуализация розетки «Олива» на стене с натюрмортом у деревянного буфета" loading="lazy" width={1120} height={1400} />
        <div>
          <h2>И ещё много где</h2>
           <p className="lead">Ресторан лишь один из сценариев. Те же рамки работают везде, где интерьер собран с вниманием к деталям.</p>
           <ul className="places">
            {["Винный бар", "Пекарня", "Гостевой дом", "Прихожая", "Столовая дома", "Переговорная"].map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div></section>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Как это работает</h2></div>
        <div className="steps">
          <div className="step"><h3>Пришлите фото панели</h3><p>Сверху, без сильного наклона. По нему подтвердим размер и посадку.</p></div>
           <div className="step"><h3>Выберите дизайн</h3><p>Цена указана на каждой карточке. Первая серия выполнена в белом цвете.</p></div>
          <div className="step"><h3>Наклейте поверх</h3><p>Клавиша, отверстия и механизм остаются как были. Электрик не нужен.</p></div>
        </div>
      </div></section>
    </Layout>
  );
}
