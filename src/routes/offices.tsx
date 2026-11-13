import { createFileRoute } from "@tanstack/react-router";
import { CatalogNote, Layout, ProductCard } from "@/components/Site";
import { OFFICE_CARDS, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/offices")({
  head: () => pageHead("Офисы", "Рамки для розеток и выключателей под айдентику вашего офиса"),
  component: Offices,
});

function Offices() {
  return (
    <Layout theme="offices">
      <div className="wrap hero">
        <div>
          <p className="kicker">Серия 05 · Офисы</p>
          <h1>Ваша айдентика даже на выключателе</h1>
        </div>
        <div className="hero-media square"><img src="/img/of-2.jpg" alt="Пример выключателя с рамкой под айдентику компании" width={900} height={900} /></div>
      </div>
      <section className="band"><div className="wrap">
        <div className="sec-head"><h2>Примеры</h2><p>Названия на рамках условные, для примера.</p></div>
        <div className="grid">{OFFICE_CARDS.map((c) => <ProductCard key={c.sku} c={c} />)}</div>
        <CatalogNote customOrder />
      </div></section>
    </Layout>
  );
}
