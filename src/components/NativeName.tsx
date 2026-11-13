export type NativeName = { lang: string; text: string; translation: string };

export function ProductNativeName({ name }: { name?: NativeName | undefined }) {
  if (!name) return null;
  return <div className="product-native-name">
    <p className="native-name" lang={name.lang} dir="ltr">{name.text}</p>
    <p className="native-translation">{name.translation}</p>
  </div>;
}