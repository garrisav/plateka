import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/japan")({
  head: () => pageHead(SERIES.japan.title, SERIES.japan.lead),
  component: () => <SeriesPage s={SERIES.japan} minimal hideInteriorCaptions greeting={{
    lang: "ja", text: "いただきます!", translation: "Спасибо за угощение!",
  }} nativeNames={{
    "JP-01": { lang: "ja", text: "竹", translation: "Бамбук" },
  }} />,
});
