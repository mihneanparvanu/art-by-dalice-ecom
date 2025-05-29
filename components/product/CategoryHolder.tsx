
interface CategoryHolderProps {
    title: string
    imageURL: string
    imageALT?: string
}
export default function CategoryHolder ({title, imageURL, imageALT}: CategoryHolderProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={imageURL} 
            alt={imageALT} 
            className="w-[10rem] h-[10rem]"
            />
            <h3 className="text-[1rem]">
                {title}
            </h3>
        </div>
)
}