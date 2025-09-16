import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import DaliceLogo from "../icons/DaliceLogo";
import AlbumsHoverMenu from "./AlbumsHoverMenu";
import { LucideCircleUser } from "lucide-react";
import Link from "next/link";


const Root = css`

.root-container {

  & .hover-menu {
  display: none;
}

& #shop:hover ~ .hover-menu{

    display: flex;
  
}








}
`

export default function DaliceNavbar() {
  return (
    <NavContainer className = {`root-container ${Root}`

}
>
      <InnerContainer className="container">
        <LogoContainer>
          <DaliceLogo className={Logo} ></DaliceLogo>
        </LogoContainer>
        <Menu>
          <Link id="shop"href="">Shop</Link>
          <Link href="">Discover</Link>
          <Link href="">Galleries</Link>
          <Link href="">Contact</Link>
        </Menu>
        <IconsContainer>
          <LucideCircleUser></LucideCircleUser>
        </IconsContainer>
      </InnerContainer>
        < AlbumsHoverMenu className= "hover-menu"></AlbumsHoverMenu>
    </NavContainer>
  );
}

// Styles
const NavContainer = styled.div`
  --content-color: var(--white);
  position: relative;
  background-color: var(--accent-primary);
  color: var(--content-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 2rem;
`;

const LogoContainer = styled.div`
  height: 5rem;
`;

const Menu = styled.div`
--text-size: 1rem;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.8rem;
  font-size: var(--text-size);
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.04em;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const Logo = css`
  fill: var(--content-color);
  width: 100%;
  height: 100%;
`;
