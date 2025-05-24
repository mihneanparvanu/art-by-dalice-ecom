import Link from "next/link"
import DaliceLogo from "../../../public/icons/DaliceLogo"
import AccountIcon from "../../../public/icons/AccountIcon"
import ShoppingBagIcon from "../../../public/icons/ShoppingBagIcon"

export default function DesktopNavbar() {
    return (
        /**DesktopNav Container */
        <nav
            className="h-20 relative py-4 flex items-center justify-between z-50 w-full">
            <div className="flex items-center justify-center absolute w-full h-full">
                <DaliceLogo className="w-30 xl:w-40 h-auto" />
            </div>

       
            <div className="flex uppercase gap-5 justify-end">
                <Link
                href={"/about"}>
                    About
                </Link>
                <Link href={"/mission"}>
                Mission
                </Link>
            </div>
           
            <div className="flex uppercase gap-5">
                <Link
                href={"/products"}
                >
                    Products
                </Link>
                <Link
                href={"/news"}>
                    News
                </Link>
                <Link
                href={"/cart"}
                >
                    <ShoppingBagIcon
                    className="w-6"
                    />
                </Link>
                <Link href={"/account"}>
                <AccountIcon
                className="w-6"
                />
                </Link>
            </div>
        </nav>
    )
}