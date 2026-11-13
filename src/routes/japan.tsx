import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/japan")({
  head: () => pageHead(SERIES.japan.title, SERIES.japan.lead),
  component: () => <SeriesPage s={SERIES.japan} />,
});
