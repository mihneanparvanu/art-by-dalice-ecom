import { styled } from "@linaria/react";
import { Product } from "@/data/Product";
import { formattedDimensions } from "@/data/FormatDimensions";

import { getTranslations } from "next-intl/server";

export default async function ProductInfo({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const size = formattedDimensions(product.dimensions, locale);
  const t = await getTranslations("ProductInfo");

  // Styles

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
  `;

  return (
    <Container>
      <div className="flex justify-between w-full">
        <div className="text-xl">{product.name}</div>

        <div className="text-[15px]">
          {product.price}
          <span> lei</span>
        </div>
      </div>

      <div className="w-full">{product.description}</div>
      <div className="flex flex-col gap-1 w-full">
        <div className="w-full">{t("details")}</div>
        <div className="w-full">
          {t("dimensions")}
          {size}
        </div>
        <div className="w-full">
          {t("material")}
          {product.material}
        </div>
        <div className="w-full">
          {t("price")}
          {product.price} lei
        </div>
      </div>
    </Container>
  );
}
