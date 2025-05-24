interface ButtonSecondaryProps {
    title: string
    onClick?: () => {}
}

export default function ButtonSecondary({ title, onClick }: ButtonSecondaryProps) {
    return (
        <button
            className="flex items-center justify-center py-3 px-5 text-[1rem] border-2 border-foreground rounded-full"
        >
            {title}
        </button>
    )
}