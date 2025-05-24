    interface FeatureProps {
        icon: React.ReactNode
        text: string
    }

export default function FeatureItem ({icon, text}: FeatureProps) {
    return (
        <div className="flex bg-white py-2 px-4 gap-3 ">
            {icon}
            {text}
        </div>
    )
}