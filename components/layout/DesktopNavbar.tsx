import Link from "next/link";
import DaliceLogo from "../../public/icons/DaliceLogo"
import { LucideShoppingBag } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function DesktopNavbar() {
  return (
    /**DesktopNav Container */
    <nav className="relative text-white bg-accent-primary hidden lg:flex"> 
      <div className="container py-4 grid grid-cols-3 items-center z-50">
        <div className="flex gap-5 justify-start justify-self-start">
          <Link href={"/about"}>About</Link>
          <Link href={"/mission"}>Mission</Link>
        </div>
        <Link className="justify-self-center"
        href={"/"}>
         <DaliceLogo className="h-auto w-20 lg:w-24 xl:w-32" />
        </Link>
        <div className="flex gap-5 justify-self-end">
          <LanguageSwitcher/>
          <Link href={"/products"}>Products</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/cart"}>
            <LucideShoppingBag />
          </Link>
          <Link href={"/account"}>
            <CircleUserRound />
          </Link>
        </div>
      </div>
    </nav>
  );
}
