
interface ButtonPrimaryProps{
title: string
action?: () => void
className?: string
}

export default function ({title, action, className}: ButtonPrimaryProps) {
    return (
       <button className={`bg-foreground text-background text-[1.1rem] lg:text-[1.4rem] py-4 px-8 rounded-full ${className}`}
       onClick={action}
       >
        {title}
       </button>
    )
}