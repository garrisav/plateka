import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/china")({
  head: () => pageHead(SERIES.china.title, SERIES.china.lead),
  component: () => <SeriesPage s={SERIES.china} />,
});
