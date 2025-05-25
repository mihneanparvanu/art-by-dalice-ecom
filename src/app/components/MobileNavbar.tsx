import DaliceLogo from "../../../public/icons/DaliceLogo";
import { LucideShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
export default function MobileNavbar() {
  return (
    <div className="bg-accent-primary py-2 lg:hidden">
      <div className="container flex justify-between items-center ">
        <div>
        <Menu/>
        </div>
        <div className="mobilelogoContainer flex flex-col items-center">
          <DaliceLogo className="w-18 md:w-24" />
        </div>
        <div>
          <LucideShoppingBag />
        </div>
      </div>
    </div>
  );
}
