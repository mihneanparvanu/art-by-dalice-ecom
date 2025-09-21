import { Product } from "@/data/Product";
export default function ProductInfo({
  product,
}: {
  product: Product;
}) {
  const size =
    product.dimensions?.width != null
      ? `${product.dimensions.width} ${product.dimensions.unit ?? ''}`
      : 'N/A';

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
      <div className="w-full">Size: {size}</div>
      <div className="w-full">Material: {product.material}</div>
    </div>
  );
}
