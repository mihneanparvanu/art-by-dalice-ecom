import { Dimensions } from "./Product";

export function getDimensionLabels(locale: string) {
  const widthText = locale == "en" ? "width" : "lățime";
  const heightText = locale == "en" ? "height" : "înălțime";

  return { widthText, heightText };
}

export function formattedDimensions(dimensions: Dimensions, locale: string) {
  const { widthText, heightText } = getDimensionLabels(locale);
  return `${dimensions.width} x ${dimensions.height}  ${dimensions.unit} (${widthText} x ${heightText})`;
}
