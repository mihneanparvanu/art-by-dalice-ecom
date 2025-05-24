import DaliceLogo from "../../../public/icons/DaliceLogo"
import MenuIcon from "../../../public/icons/MenuIcon"
import ShoppingBagIcon from "../../../public/icons/ShoppingBagIcon"
export default function MobileNavbar() {
    return (
        <div className="flex justify-between items-center py-4 px-4 lg:hidden">
            <div>
                <MenuIcon/>
            </div>
            <div className="mobilelogoContainer flex flex-col items-center">
                <DaliceLogo/>
            </div>
            <div>
                <ShoppingBagIcon/>
            </div>
        </div>
    )
}