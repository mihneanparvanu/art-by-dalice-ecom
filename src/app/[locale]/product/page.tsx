import { styled } from "@linaria/react";
import { css } from "@linaria/core";

// Utilities

// Components
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";

import { DisplayProduct } from "@/data/DisplayProduct";

const Container = styled.main`
  display: flex;

  @media screen and (width < 1024px) {
    flex-direction: column;
  }
`;

const flexChild = css`
  flex: 1 1 50%;
`;

export default async function ProductDetails(props: {
  searchParams: Promise<{ id: string }>;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const locale = params.locale || "en";
  const id = searchParams.id;
  const product: DisplayProduct = await fetchSingleProduct(id, locale);
  return (
    <Container>
      <ProductDisplay
        className={flexChild}
        imgURL={product.images[0].url}
      ></ProductDisplay>
      <ProductInfo
        className={flexChild}
        product={product}
        locale={locale}
      ></ProductInfo>
    </Container>
  );
}
