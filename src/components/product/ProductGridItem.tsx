import { HTMLAttributes } from "react";
interface ProductGridItemProps extends HTMLAttributes<HTMLDivElement>{
    title: string
    price: string
    imageURL?:  string
}

export default function ProductGridItem({title, price, imageURL}: ProductGridItemProps) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="bg-surface-primary w-full flex justify-center items-center py-6">
        <img 
        className="w-50 h-64 object-contain"
        src={imageURL} 
        alt=""
         />
      </div>
      <div className="w-full flex flex-col">
        <h2>
            {title}
        </h2>
        <h3>
            {price}
        </h3>
      </div>
    </div>
  );
}
