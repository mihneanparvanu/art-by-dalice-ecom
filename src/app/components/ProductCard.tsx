import Image from "next/image";

interface ProductCardProps {
  productTitle: string;
  productPrice: string;
  productImage?: string;
  productImageAlt?: string;
}

export default function ProductCard({
  productTitle,
  productPrice,
  productImage,
  productImageAlt,
}: ProductCardProps) {
  return (
    <div
      className="flex flex-col items-baseline p-(--card-padding) rounded-(--card-radius) bg-surface-primary
    [--card-radius:var(--radius-2xl)]
    [--card-padding:--spacing(2)]
    "
    >
      <div className="p-6 bg-surface-secondary rounded-t-[calc(var(--card-radius)-var(--card-padding))]">
        {productImage ? (
          <Image
            width={800}
            height={1200}
            className="max-w-full h-[10rem] lg:h-[14rem] object-contain"
            src={productImage}
            alt={productImageAlt || `Image of ${productTitle}`}
          />
        ) : (
          <div>No image available</div>
        )}
      </div>
      <div className="flex flex-col gap-0.5 p-4">
        <p>{productTitle}</p>
        <p>{productPrice}</p>
      </div>
    </div>
  );
}
