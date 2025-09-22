import { styled } from "@linaria/react";
import { Product } from "@/data/Product";
import { formattedDimensions } from "@/data/FormatDimensions";

import { getTranslations } from "next-intl/server";

export default async function ProductInfo({
  product,
  locale,
  className,
}: {
  product: Product;
  locale: string;
  className?: string;
}) {
  const size = formattedDimensions(product.dimensions, locale);
  const t = await getTranslations("ProductInfo");
  const shouldDisplayExhibition = product.exhibition != null;
  // Styles
  const Container = styled.div`
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-inline: 2rem;
    padding-block: 0.5rem;
    background-color: var(--surface-primary);
  `;

  const TitleDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
  `;

  const TitleContainer = styled.div`
    font-weight: 500;
  `;

  const DescriptionContainer = styled.div`
    font-size: 0.8em;
    font-weight: 500;
    color: var(--gray-200);
  `;

  const ExhibitionContainer = styled.div`
    font-size: 0.69em;
    font-weight: 400;
    color: var(--gray-500);
  `;

  const DetailsContainer = styled.div`
    font-size: 0.8em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container className={`${className}`}>
      <TitleDescriptionContainer>
        <div className="flex justify-between w-full">
          <TitleContainer>{product.name}</TitleContainer>
        </div>
        <DescriptionContainer>{product.description}</DescriptionContainer>
      </TitleDescriptionContainer>
      {shouldDisplayExhibition && (
        <ExhibitionContainer>
          {t("exhibition")}
          {product.exhibition || ""}
        </ExhibitionContainer>
      )}
      <DetailsContainer>
        <div className="w-full">
          {t("price")}
          {product.price} lei
        </div>
        <div className="w-full">
          {t("material")} {product.materials.material}
        </div>
        <div className="w-full">
          {t("dimensions")}
          {size}
        </div>
      </DetailsContainer>
    </Container>
  );
}
