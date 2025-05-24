import PackageIcon from "../icons/PackageIcon"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"
export default function Navbar() {
    return (
        <div className="flex flex-col py-2 md:px-8 lg:px-16 z-50">
            <div className="flex flex-col py-2 items-center w-full bg-primary-surface">
                <div className="flex flex-row justify-center align-middle gap-2">
                    <PackageIcon/>
                     <p>
                        Free delivery anywhere in Romania
                        </p>
                </div>
               
            </div>
            <DesktopNavbar/>
            <MobileNavbar/>
        </div>
    )
}