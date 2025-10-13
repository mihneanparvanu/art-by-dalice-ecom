import Image from "next/image";

interface CategoryHolderProps {
  title: string;
  imageURL: string;
  imageAlt: string;
}
export default function CategoryHolder({
  title,
  imageURL,
  imageAlt,
}: CategoryHolderProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={imageURL} alt={imageAlt} className="w-[10rem] h-[10rem]" />
      <h3 className="text-[1rem]">{title}</h3>
    </div>
  );
}
