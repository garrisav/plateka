import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/china")({
  head: () => pageHead(SERIES.china.title, SERIES.china.lead),
  component: () => <SeriesPage s={SERIES.china} minimal hideInteriorCaptions greeting={{
    lang: "zh", text: "请喝茶!", translation: "Прошу к чаю!",
  }} nativeNames={{
    "CN-01": { lang: "zh-Latn", text: "Xiángyún", translation: "Облака" },
    "CN-02": { lang: "zh-Latn", text: "Huíwén", translation: "Меандр" },
    "CN-03": { lang: "zh-Latn", text: "Mǔdān", translation: "Пион" },
    "CN-04": { lang: "zh-Latn", text: "Zhú", translation: "Бамбук" },
  }} imageOverrides={{
    "china-tea-interior.jpg": "china-clouds-reviewed-interior.jpg",
    "china-entry-interior.jpg": "china-peony-reviewed-interior.jpg",
  }} />,
});
