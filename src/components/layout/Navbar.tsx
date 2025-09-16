import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import DaliceLogo from "../icons/DaliceLogo";
import { LucideCircleUser } from "lucide-react";
import Link from "next/link";

export default function DaliceNavbar() {
  return (
    <NavContainer>
      <InnerContainer className="container">
        <LogoContainer>
          <DaliceLogo className={Logo} showText={true}></DaliceLogo>
        </LogoContainer>
        <Menu>
          <Link href="">Shop</Link>
          <Link href="">Discover</Link>
          <Link href="">Galleries</Link>
          <Link href="">Contact</Link>
        </Menu>
        <IconsContainer>
          <LucideCircleUser></LucideCircleUser>
        </IconsContainer>
      </InnerContainer>
    </NavContainer>
  );
}

// Styles
const NavContainer = styled.div`
  --content-color: var(--white);
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
  height: 6rem;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.8rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 4%;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const Logo = css`
  fill: var(--content-color);
  width: 100%;
  height: 100%;
`;
