import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/georgia")({
  head: () => pageHead(SERIES.georgia.title, SERIES.georgia.lead),
  component: () => <SeriesPage s={SERIES.georgia} minimal greeting={{
    lang: "ka", text: "მობრძანდით!", translation: "Добро пожаловать!",
  }} nativeNames={{
    "GE-01": { lang: "ka", text: "ვაზი", translation: "Виноградная лоза" },
    "GE-02": { lang: "ka", text: "წნული", translation: "Плетёнка" },
    "GE-03": { lang: "ka", text: "თაღედი", translation: "Аркада" },
    "GE-04": { lang: "ka", text: "მზე", translation: "Солнце" },
  }} imageOverrides={{
    "ge-int-plug.jpg": "georgia-vine-interior.jpg",
    "ge-int-switch.jpg": "georgia-sun-interior.jpg",
  }} />,
});
