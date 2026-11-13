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
import chinaClouds from "@/assets/china-clouds-original.png.asset.json";
import chinaMeander from "@/assets/china-meander-original.png.asset.json";
import chinaPeony from "@/assets/china-peony-original.png.asset.json";
import chinaBamboo from "@/assets/china-bamboo-original.png.asset.json";
import chinaCloudsReviewed from "@/assets/china-clouds-reviewed-interior.jpg";
import chinaPeonyReviewed from "@/assets/china-peony-reviewed-interior.jpg";
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
  "china-clouds-reviewed-interior.jpg": chinaCloudsReviewed,
  "china-peony-reviewed-interior.jpg": chinaPeonyReviewed,
  "japan-counter-interior.jpg": japanCounter,
  "japan-shoji-interior.jpg": japanShoji,
  "home-dining-mockup.jpg": homeDining,
  "it-akanf.jpg": italyAcanthus,
  "it-oliva.jpg": italyOlive,
  "it-gotika.jpg": italyGothic,
  "it-liliya.jpg": italyLily,
  "cn-oblaka.jpg": chinaClouds.url,
  "cn-meandr.jpg": chinaMeander.url,
  "cn-pion.jpg": chinaPeony.url,
  "cn-bamboo.png": chinaBamboo.url,
  "jp-bambuk.jpg": japanBamboo,
};

/** Bundled visualizations override legacy media without changing catalog identifiers. */
export function imageSrc(name: string) {
  return images[name] ?? `/img/${name}`;
}