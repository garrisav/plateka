import { createFileRoute, Link } from "@tanstack/react-router";
import { Fit, Layout } from "@/components/Site";
import { langSearch, useLang, useT } from "@/lib/i18n";
import { pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => pageHead("Декор для розеток и выключателей"),
  component: Home,
});

function Home() {
  const lang = useLang();
  const t = useT();
  const s = langSearch(lang);
  const tiles = [
    { to: "/georgia", k: "nav.georgia", ru: "Грузия", img: "int-old-1.jpg", sub: "Лоза, плетёнка, аркада, солнце", wide: true },
    { to: "/italy", k: "nav.italy", ru: "Италия", img: "it-akanf.jpg", sub: "Аканф, олива, готика, лилия", wide: true, soon: true },
    { to: "/china", k: "nav.china", ru: "Китай", img: "cn-oblaka.jpg", sub: "Облака, меандр, пион", soon: true },
    { to: "/japan", k: "nav.japan", ru: "Япония", img: "jp-bambuk.jpg", sub: "Бамбук", soon: true },
    { to: "/offices", k: "nav.offices", ru: "Офисы", img: "of-2.jpg", sub: "Под айдентику команды" },
  ] as const;
  return (
    <Layout theme="georgia">
      <div className="wrap hero">
        <div>
          <p className="kicker">Каталог · осень 2026</p>
          <h1>Белая панель на стене тоже может быть частью интерьера</h1>
          <p className="lead">Декоративные накладки для израильских розеток и выключателей. Клеятся поверх штатной панели или обрамляют её — без электрика и без замены фурнитуры.</p>
          <div className="actions">
            <Link className="btn" to="/georgia" search={s}>Серия «Грузинский стол»</Link>
            <Link className="btn ghost" to="/order" search={s}>Прислать фото панели</Link>
          </div>
          <Fit />
        </div>
        <div className="hero-media"><img src="/img/ge-int-switch.jpg" alt="Выключатель в декоративной рамке «Солнце» на стене грузинского зала с картиной в духе Пиросмани" width={1122} height={1402} /></div>
      </div>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Куда поставить</h2><p>Серии собраны вокруг мест, а не вокруг узоров: зал с характером, прихожая, переговорная.</p></div>
        <div className="tiles">
          {tiles.map((x) => (
            <Link key={x.to} className={`tile${"wide" in x ? " wide" : ""}`} to={x.to} search={s}>
              <img src={`/img/${x.img}`} alt="" loading="lazy" />
              {"soon" in x && <span className="soon">Интерьеры скоро</span>}
              <span className="t"><b>{t(x.k, x.ru)}</b><small>{x.sub}</small></span>
            </Link>
          ))}
        </div>
      </div></section>
      <section><div className="wrap split">
        <img src="/img/int-old-2.jpg" alt="Выключатель в декоративной рамке на стене с росписью в зале ресторана" loading="lazy" style={{ borderRadius: 4, aspectRatio: "4/5", objectFit: "cover" }} />
        <div>
          <h2>И ещё много где</h2>
          <p className="lead">Ресторан — только один из сценариев. Те же рамки работают везде, где интерьер собран с вниманием к деталям.</p>
          <ul className="places" style={{ color: "var(--pk-ink)" }}>
            {["Винный бар", "Пекарня", "Гостевой дом", "Прихожая", "Столовая дома", "Переговорная"].map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div></section>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Как это работает</h2></div>
        <div className="steps">
          <div className="step"><h3>Пришлите фото панели</h3><p>Сверху, без сильного наклона. По нему подтвердим размер и посадку.</p></div>
          <div className="step"><h3>Выберите дизайн</h3><p>Цена указана на каждой карточке. Белый цвет — для первой серии.</p></div>
          <div className="step"><h3>Наклейте поверх</h3><p>Клавиша, отверстия и механизм остаются как были. Электрик не нужен.</p></div>
        </div>
      </div></section>
    </Layout>
  );
}
