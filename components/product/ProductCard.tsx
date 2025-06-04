
interface ProductCardProps {
  productTitle: string;
  productPrice: string;
  productImageURL?: string;
}

export default function ProductCard({
  productTitle,
  productPrice,
  productImageURL,
}: ProductCardProps) {
  return (
    <div
      className="flex flex-col items-baseline">
      <div className="py-10 px-5 w-full flex justify-center bg-surface-primary">
        {productImageURL ? (
          <img 
            width={500}
            height={1500}
            className="w-[50rem] h-[25rem] object-contain"
            src={productImageURL}
            alt={`Image of ${productTitle}  painting`}
          />
        ) : (
          <div>No image available</div>
        )}
      </div>
      <div className="flex flex-col gap-0.5 px-2 py-4">
        <p>{productTitle}</p>
        <p>{productPrice} <span> lei</span></p>
      </div>
    </div>
  );
}
