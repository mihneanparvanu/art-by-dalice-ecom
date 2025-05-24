interface ButtonSecondaryProps {
    title: string
}

export default function ButtonSecondary({ title }: ButtonSecondaryProps) {
    return (
        <button
            className="flex items-center justify-center py-3 px-5 text-[1rem] border-2 border-foreground rounded-full"
        >
            {title}
        </button>
    )
}