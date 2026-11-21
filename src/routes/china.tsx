import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/china")({
  head: () => pageHead(SERIES.china.title, SERIES.china.lead),
  component: () => <SeriesPage s={SERIES.china} minimal hideInteriorCaptions greeting={{
    lang: "zh", text: "请喝茶!", translation: "Прошу к чаю!",
  }} nativeNames={{
    "CN-01": { lang: "zh", text: "祥云", translation: "Облака" },
    "CN-02": { lang: "zh", text: "回纹", translation: "Меандр" },
    "CN-03": { lang: "zh", text: "牡丹", translation: "Пион" },
    "CN-04": { lang: "zh", text: "竹", translation: "Бамбук" },
  }} imageOverrides={{
    "china-tea-interior.jpg": "china-clouds-reviewed-interior.jpg",
    "china-entry-interior.jpg": "china-peony-reviewed-interior.jpg",
  }} />,
});
