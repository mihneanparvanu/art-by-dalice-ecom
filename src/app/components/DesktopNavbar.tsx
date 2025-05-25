import Link from "next/link";
import DaliceLogo from "../../../public/icons/DaliceLogo";
import { LucideShoppingBag } from "lucide-react";
import { CircleUserRound } from "lucide-react";

export default function DesktopNavbar() {
  return (
    /**DesktopNav Container */
    <nav className="relative bg-accent-primary hidden lg:flex">
      <div className="flex -z-0 items-center justify-center absolute w-full h-full">
        <DaliceLogo className="h-auto w-20 lg:w-24 xl:w-32" />
      </div>

      <div className="container py-8 flex items-center justify-between z-50 w-full ">
        <div className="flex uppercase gap-5 justify-end">
          <Link href={"/about"}>About</Link>
          <Link href={"/mission"}>Mission</Link>
        </div>

        <div className="flex uppercase gap-5">
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
