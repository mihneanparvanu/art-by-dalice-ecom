import ProductGridItem from "@/components/product/ProductGridItem";
import Link from "next/link";

// Styles
import { styled } from "@linaria/react";
import { media } from "@/styles/breakpoints";

// Product fetching
import fetchProducts from "@/data/FetchProducts";

const NoProductsDisplay = styled.div`
  height: 80dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--content-tertiary);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  row-gap: 2.5rem;
  padding-inline: 2rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default async function ProductsPage(props: {
  searchParams: Promise<{ album: string }>;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale || "en";

  const products = await fetchProducts(locale);
  const hasProducts = Array.isArray(products) && products.length > 0;

  if (!hasProducts) {
    return <NoProductsDisplay>No products found</NoProductsDisplay>;
  }

  const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

  console.log(sortedProducts);

  return (
    <main className="flex py-10 justify-center">
      <div className="flex flex-col justify-center w-full">
        <Grid>
          {sortedProducts.map((product) => (
            <Link
              href={{ pathname: "/product", query: { id: product.id } }}
              key={product.id}
            >
              <ProductGridItem
                title={product.name}
                price={product.price}
                imageURL={product.images[0]?.url}
              />
            </Link>
          ))}
        </Grid>
      </div>
    </main>
  );
}
