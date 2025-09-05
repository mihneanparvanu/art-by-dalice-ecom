import DaliceLogo from "../../dalice-art.com/public/icons/DaliceLogo";
import { LucideShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
export default function MobileNavbar() {
  return (
    <div className="bg-surface-primary text-white py-1 lg:hidden">
      <div className="wrapper flex justify-between items-center ">
        <div>
        <Menu/>
        </div>
        <div className="mobilelogoContainer flex flex-col items-center">
          <DaliceLogo className="w-6 md:w-24" />
        </div>
        <div>
          <LucideShoppingBag />
        </div>
      </div>
    </div>
  );
}
