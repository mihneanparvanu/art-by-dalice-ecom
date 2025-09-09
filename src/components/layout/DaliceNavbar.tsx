import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import DaliceLogo from "../../../public/icons/DaliceLogo";
import { LucideCircleUser } from "lucide-react";
import Link from "next/link";

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-block: 0.5rem;
  padding-inline: 2rem;
  background-color: var(--accent-primary);
`;

export default function DaliceNavbar() {
  return (
    <NavContainer>
      <div className={logoContainer}>
        <DaliceLogo fill="#ffffff" className={logo}></DaliceLogo>
      </div>
      <div className={menu}>
        <Link href="">Shop</Link>
        <Link href="">Discover</Link>
        <Link href="">Galleries</Link>
        <Link href="">Contact</Link>
      </div>
      <div>
        <div></div>
        <div>
          <LucideCircleUser></LucideCircleUser>
        </div>
      </div>
    </NavContainer>
  );
}

// Styles

const logoContainer = css`
  height: 5rem;
`;

const logo = css`
  width: 100%;
  height: 100%;
`;

const menu = css`
  position: absolute;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 4%;
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
`;
