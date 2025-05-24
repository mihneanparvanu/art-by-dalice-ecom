import Image from "next/image"

interface ProductCardProps {
    productTitle: string
    productPrice: string
    productImage: string
    productImageAlt: string
}

export default function ProductCard({ productTitle, productPrice, productImage, productImageAlt }: ProductCardProps) {
    return (
        <div className="flex flex-col items-baseline gap-2">
            <div className="">
                <Image
                    width={800}
                    height={1200}
                    className="w-[30rem] lg:w-full lg:h-auto object-contain"

                    src={productImage}
                    alt={productImageAlt}
                />
            </div>
            <div className="flex flex-col gap-0.5">
                <p>
                    {productTitle}
                </p>
                <p>
                     {productPrice}
                </p>
            </div>
        </div>
    )
}