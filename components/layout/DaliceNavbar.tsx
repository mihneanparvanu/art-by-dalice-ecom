//Components
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"
//Icons
import { Box } from "lucide-react"
export default function Navbar() {
    return (
        <div className="sticky top-0 flex flex-col z-50">
            <div className="flex flex-col py-1 items-center w-full bg-background">
                <div className="flex flex-row items-center lg:py-2 gap-2">
                    <Box className="w-5"/>
                     <p className="font-medium text-[0.65rem] lg:text-[0.8rem]">
                        Orders over 2000 lei get free delivery
                        </p>
                </div>
               
            </div>
            <DesktopNavbar/>
            <MobileNavbar/>
        </div>
    )
}