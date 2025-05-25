//Components
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"
//Icons
import { Box } from "lucide-react"
export default function Navbar() {
    return (
        <div className="flex flex-col pt-1 z-50">
            <div className="flex flex-col py-2 items-center w-full">
                <div className="flex flex-row items-center lg:py-2 gap-2">
                    <Box className="w-5"/>
                     <p className="text-[0.8rem]">
                        Free delivery anywhere in Romania 
                        </p>
                </div>
               
            </div>
            <DesktopNavbar/>
            <MobileNavbar/>
        </div>
    )
}