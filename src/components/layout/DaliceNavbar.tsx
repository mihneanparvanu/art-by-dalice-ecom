import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import DaliceLogo from "../../../public/icons/DaliceLogo";
import { LucideCircleUser } from "lucide-react";
import Link from "next/link";

const NavContainer = styled.div`
  background-color: var(--accent-primary);
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
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 4%;
`;
const IconsContainer = styled.div`
  display: flex;
`;

export default function DaliceNavbar() {
  return (
    <NavContainer>
      <InnerContainer className="container">
        <LogoContainer>
          <DaliceLogo fill="#ffffff" className={Logo}></DaliceLogo>
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

const Logo = css`
  width: 100%;
  height: 100%;
`;
