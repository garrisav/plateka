import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/italy")({
  head: () => pageHead(SERIES.italy.title, SERIES.italy.lead),
  component: () => <SeriesPage s={SERIES.italy} minimal hideInteriorCaptions greeting={{
    lang: "it", text: "Buon appetito!", translation: "Приятного аппетита!",
  }} nativeNames={{
    "IT-01": { lang: "it", text: "Acanto", translation: "Аканф" },
    "IT-02": { lang: "it", text: "Olivo", translation: "Олива" },
    "IT-03": { lang: "it", text: "Gotico", translation: "Готика" },
    "IT-04": { lang: "it", text: "Giglio", translation: "Лилия" },
  }} imageOverrides={{
    "italy-buffet-interior.jpg": "italy-olive-reviewed-interior.jpg",
    "italy-entry-interior.jpg": "italy-acanthus-reviewed-interior.jpg",
  }} />,
});
