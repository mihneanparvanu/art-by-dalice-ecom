import React from "react"

type MenuIconProps = React.ComponentPropsWithoutRef<'svg'>

const MenuIcon = ({className}: MenuIconProps) => {
    return (
        <svg className= {`py-1 px-1 w-7 h-auto md:w-10 ${className}`} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.5H16M0 4.5H9M0 8.5H16" stroke='currentColor' />
        </svg>

    )
}

export default MenuIcon