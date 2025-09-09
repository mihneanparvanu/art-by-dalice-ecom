interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
  material: string;
  dimensions: string;
}

export default function ProductInfo({
  product,
}: {
  product: ProductInfoProps;
}) {
  return (
    <div className="p-8 gap-4 flex flex-col items-center md:w-[50%]">
      <div className="flex justify-between w-full">
        <div className="text-xl">{product.name}</div>
        <div className="text-xl">
          {product.price}
          <span> lei</span>
        </div>
      </div>
      <div className="w-full">Size: {product.dimensions}</div>
      <div className="w-full">Material: {product.material}</div>
    </div>
  );
}
