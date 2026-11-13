import italyBuffet from "@/assets/italy-buffet-interior.jpg";
import italyEntry from "@/assets/italy-entry-interior.jpg";
import chinaTea from "@/assets/china-tea-interior.jpg";
import chinaEntry from "@/assets/china-entry-interior.jpg";
import japanCounter from "@/assets/japan-counter-interior.jpg";
import japanShoji from "@/assets/japan-shoji-interior.jpg";
import homeDining from "@/assets/home-dining-mockup.jpg";
import italyAcanthus from "@/assets/italy-acanthus-product.jpg";
import italyOlive from "@/assets/italy-olive-product.jpg";
import italyGothic from "@/assets/italy-gothic-product.jpg";
import italyLily from "@/assets/italy-lily-product.jpg";
import chinaClouds from "@/assets/china-clouds-product.jpg";
import chinaMeander from "@/assets/china-meander-product.jpg";
import chinaPeony from "@/assets/china-peony-product.jpg";
import japanBamboo from "@/assets/japan-bamboo-product.jpg";
import georgiaVine from "@/assets/georgia-vine-interior.jpg";
import georgiaSun from "@/assets/georgia-sun-interior.jpg";
import georgiaVineProduct from "@/assets/georgia-vine-product.jpg";
import georgiaBraidProduct from "@/assets/georgia-braid-product.jpg";

const images: Record<string, string> = {
  "georgia-vine-interior.jpg": georgiaVine,
  "georgia-sun-interior.jpg": georgiaSun,
  "ge-loza.jpg": georgiaVineProduct,
  "ge-pletenka.jpg": georgiaBraidProduct,
  "italy-buffet-interior.jpg": italyBuffet,
  "italy-entry-interior.jpg": italyEntry,
  "china-tea-interior.jpg": chinaTea,
  "china-entry-interior.jpg": chinaEntry,
  "japan-counter-interior.jpg": japanCounter,
  "japan-shoji-interior.jpg": japanShoji,
  "home-dining-mockup.jpg": homeDining,
  "it-akanf.jpg": italyAcanthus,
  "it-oliva.jpg": italyOlive,
  "it-gotika.jpg": italyGothic,
  "it-liliya.jpg": italyLily,
  "cn-oblaka.jpg": chinaClouds,
  "cn-meandr.jpg": chinaMeander,
  "cn-pion.jpg": chinaPeony,
  "jp-bambuk.jpg": japanBamboo,
};

/** Bundled visualizations override legacy media without changing catalog identifiers. */
export function imageSrc(name: string) {
  return images[name] ?? `/img/${name}`;
}