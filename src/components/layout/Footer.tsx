import { styled } from "@linaria/react";
import DaliceLogo from "../icons/DaliceLogo";
import Link from "next/link";

// Icons
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--surface-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block-start: 2rem;
  padding-block-end: 4rem;
  gap: 3rem;
  color: var(--accent-primary);
  font-size: 1.25rem;
  font-weight: 600;
`;

const LogoContainer = styled.div`
  width: 10rem;
`;

const MenusContainer = styled.div`
  color: var(--content-primary);
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-inline: 4rem;

  #social-links {
    flex-direction: row;
  }
`;

const MenuContainer = styled.menu`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinksContainer = styled.div`
  color: var(--content-secondary);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.8em;
  font-weight: 500;
`;

const CopyrightContainer = styled.div`
  font-size: 0.7em;
  color: var(--content-tertiary);
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <LogoContainer>
        <DaliceLogo showText={true}></DaliceLogo>
      </LogoContainer>
      <MenusContainer>
        <MenuContainer>
          <h4>Shop</h4>
          <LinksContainer>
            <Link href="">Paintings</Link>
            <Link href="">Jewelry</Link>
            <Link href="">Lamps</Link>
            <Link href="">Tabletop Art</Link>
          </LinksContainer>
        </MenuContainer>
        <MenuContainer>
          <h4>Help</h4>
          <LinksContainer>
            <Link href="">Shipping & Returns</Link>
            <Link href="">Care & Warranty</Link>
            <Link href="">Questions & Answers</Link>
            <Link href="">Contact</Link>
          </LinksContainer>
        </MenuContainer>
        <MenuContainer>
          <h4>Privacy</h4>
          <LinksContainer>
            <Link href="">Terms & Conditions</Link>
            <Link href="">Pledge to your privacy</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Cookie Policy</Link>
          </LinksContainer>
        </MenuContainer>
        <MenuContainer>
          <h4>Connect</h4>
          <LinksContainer id="social-links">
            <Link
              href="https://www.facebook.com/artbydalice"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Facebook />
            </Link>
            <Link href="">
              <Instagram />
            </Link>
            <Link href="">
              <Mail />
            </Link>
          </LinksContainer>
        </MenuContainer>
      </MenusContainer>
      <CopyrightContainer>
        `© JIM & DANA BROWN S.R.L. {year}. All rights reserved.`
      </CopyrightContainer>
    </FooterContainer>
  );
}
