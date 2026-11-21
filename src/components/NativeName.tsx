import { useTr } from "@/lib/i18n";

export type NativeName = { lang: string; text: string; translation: string };

export function ProductNativeName({ name }: { name?: NativeName | undefined }) {
  const tr = useTr();
  if (!name) return null;
  return <div className="product-native-name">
    <p className="native-name" lang={name.lang} dir="ltr">{name.text}</p>
    <p className="native-translation">{tr(name.translation)}</p>
  </div>;
}