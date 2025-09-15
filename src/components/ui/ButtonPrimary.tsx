
interface ButtonPrimaryProps{
title: string
action?: () => void
className?: string
}

export default function ButtonPrimary ({title, action, className}: ButtonPrimaryProps) {
    return (
       <button className={`bg-accent-primary text-background font-semibold text-[1rem] lg:text-[1rem] py-4 px-8 rounded-full ${className}`}
       onClick={action}
       >
        {title}
       </button>
    )
}