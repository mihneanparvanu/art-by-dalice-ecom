import FeatureItem from "./featureItem"
import PaintPalette from "../icons/PaintPalette"
export default function FeaturesBox() {
    return (
        <div className="flex flex-col items-center gap-1 bg-white px-4 py-2">
            <div>
                <FeatureItem
                    icon={<PaintPalette
                        fill="#000000"
                    />}
                    text="Free delivery over 1000RON"
                />
                <FeatureItem
                    icon={<PaintPalette
                        fill="#000000"
                    />}
                    text="Made in Romania"
                />
                <FeatureItem
                    icon={<PaintPalette
                        fill="#000000"
                    />}
                    text="Sustainable materials"
                />
            </div>
        </div>
    )
}

