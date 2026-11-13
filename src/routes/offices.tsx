import { createFileRoute, Link } from "@tanstack/react-router";
import { Fit, Layout, ProductCard } from "@/components/Site";
import { langSearch, useLang } from "@/lib/i18n";
import { OFFICE_CARDS, pageHead } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/offices")({
  head: () => pageHead("Офисы", "Рамки для розеток и выключателей под айдентику вашего офиса"),
  component: Offices,
});

function Offices() {
  const lang = useLang();
  return (
    <Layout theme="offices">
      <div className="wrap hero">
        <div>
          <p className="kicker">Серия 05 · Офисы</p>
          <h1>Ваша айдентика даже на выключателе</h1>
          <p className="lead">Для стартапов и студий, которые продумывают каждую деталь офиса. Делаем рамку под ваш знак, цвет и шрифт.</p>
          <div className="actions"><Button asChild className="btn"><Link to="/order" search={langSearch(lang, { design: "OF" })}>Обсудить заказ для офиса</Link></Button></div>
          <Fit />
        </div>
        <div className="hero-media square"><img src="/img/of-2.jpg" alt="Пример выключателя с рамкой под айдентику компании" width={900} height={900} /></div>
      </div>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Примеры</h2><p>Названия на рамках условные, для примера. Цена зависит от количества и сложности знака.</p></div>
        <div className="grid">{OFFICE_CARDS.map((c) => <ProductCard key={c.sku} c={c} />)}</div>
      </div></section>
    </Layout>
  );
}
