import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/italy")({
  head: () => pageHead(SERIES.italy.title, SERIES.italy.lead),
  component: () => <SeriesPage s={SERIES.italy} minimal imageOverrides={{
    "italy-buffet-interior.jpg": "italy-olive-reviewed-interior.jpg",
    "italy-entry-interior.jpg": "italy-acanthus-reviewed-interior.jpg",
  }} />,
});
