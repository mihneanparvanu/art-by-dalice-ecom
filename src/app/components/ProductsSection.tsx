import React from "react"
//Components
import ButtonSecondary from "./ButtonSecondary"


interface ProductsSectionProps {
    sectionTitle: string
    buttonTitle: string
    products?: React.ReactNode
}

export default function ProductsSection({sectionTitle, buttonTitle, products}: ProductsSectionProps) {
    return (
        <section className="my-20 md:my-30 px-4 lg:px-16">
            <div className="flex flex-col gap-8">
                <div className="flex justify-between text-2xl">
                   {sectionTitle}
                    <ButtonSecondary
                        title={buttonTitle}
                    />
                </div>
                <div className="flex flex-col gap-10 items-center lg:flex-row ">
                    {products}
                </div>
            </div>
        </section>
    )
}    