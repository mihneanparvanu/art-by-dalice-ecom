
import ProductDisplay from "./ProductDisplay"


export default async function ProductDetails ({params}: {params: Promise<{productID: string}>
}) {
    const productID = (await params).productID
    return (
        <main className="flex">
            <ProductDisplay/>
            <div className="text-2xl"> {productID} </div>
        </main>
    )
}

