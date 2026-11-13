import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Fit, Layout } from "@/components/Site";
import { ORDER_OPTIONS, WHATSAPP_URL, buildOrderMailto, displaySku, pageHead } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order")({
  validateSearch: (s: Record<string, unknown>): { design?: string } =>
    typeof s["design"] === "string" ? { design: s["design"] } : {},
  head: () => pageHead("Заказать", "Пришлите фото панели, и мы подтвердим размер и назовём цену"),
  component: Order,
});

function Order() {
  const { design } = Route.useSearch();
  const initial = design && ORDER_OPTIONS.some(([v]) => v === design) ? design : "GE-01";
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const f = Object.fromEntries(["design", "qty", "name", "phone", "msg"].map((k) => [k, String(d.get(k) ?? "")])) as Record<"design" | "qty" | "name" | "phone" | "msg", string>;
    if (!f.name.trim() || !f.phone.trim()) { setStatus("Заполните имя и телефон."); return; }
    window.location.href = buildOrderMailto(f);
    setStatus("Открываем почту… Не забудьте приложить фото панели.");
  }
  return (
    <Layout theme="georgia">
      <div className="wrap hero" style={{ alignItems: "start" }}>
        <div>
          <p className="kicker">Заявка</p>
          <h1>Пришлите фото панели, и мы подтвердим размер</h1>
          <p className="lead">Мы ответим, подходит ли дизайн к вашей панели, и назовём итоговую цену. Оплата только после подтверждения размера.</p>
          <Fit />
          <p style={{ marginBlockStart: "1.5rem" }}><Button asChild className="btn ghost"><a href={WHATSAPP_URL}>Написать в WhatsApp</a></Button></p>
        </div>
        <form noValidate onSubmit={submit} key={initial}>
          <label><span>Дизайн</span><select name="design" defaultValue={initial}>
            {ORDER_OPTIONS.map(([v, n]) => <option key={v} value={v}>{displaySku(v)} · {n}</option>)}</select></label>
          <label><span>Количество</span><input name="qty" type="number" min={1} defaultValue={1} /></label>
          <label><span>Имя</span><input name="name" autoComplete="name" required /></label>
          <label><span>Телефон или WhatsApp</span><input name="phone" type="tel" autoComplete="tel" required /></label>
          <label><span>Комментарий</span><textarea name="msg" rows={3} /><span className="hint">Фото панели прикрепите к письму или пришлите в WhatsApp.</span></label>
          <Button className="btn" type="submit">Отправить заявку</Button>
          <p className="hint" role="status">{status}</p>
        </form>
      </div>
    </Layout>
  );
}
