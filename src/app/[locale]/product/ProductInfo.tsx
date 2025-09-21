import { Product } from "@/data/Product";
import { formattedDimensions } from "@/data/FormatDimensions";
export default function ProductInfo({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const size = formattedDimensions(product.dimensions, locale);

  return (
    <div className="p-8 gap-4 flex flex-col items-center md:w-[50%]">
      <div className="flex justify-between w-full">
        <div className="text-xl">{product.name}</div>

        <div className="text-xl">
          {product.price}
          <span> lei</span>
        </div>
      </div>

      <div className="w-full">{product.description}</div>
      <div className="w-full">Dimensions: {size}</div>
      <div className="w-full">Material: {product.material}</div>
    </div>
  );
}
