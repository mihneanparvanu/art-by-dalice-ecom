"use client"
//Icons
import MenuIcon from "../../../public/icons/MenuIcon"
import Image from "next/image"
import { useState } from "react"
export default function NavbarMenu() {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
            >
                <MenuIcon
                    className="w-4 h-auto text-s"
                />
            </button>
        </div>
    )
}