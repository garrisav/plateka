import { createFileRoute } from "@tanstack/react-router";
import { SeriesPage } from "@/components/SeriesPage";
import { SERIES, pageHead } from "@/lib/catalog";

export const Route = createFileRoute("/georgia")({
  head: () => pageHead(SERIES.georgia.title, SERIES.georgia.lead),
  component: () => <SeriesPage s={SERIES.georgia} />,
});
