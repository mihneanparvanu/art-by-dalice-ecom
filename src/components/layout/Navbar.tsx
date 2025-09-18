import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import Link from "next/link";

import DaliceLogo from "../icons/DaliceLogo";
import { LucideCircleUser } from "lucide-react";

import AlbumsDisplay from "@/components/product/FetchAlbums";

export default function DaliceNavbar() {
  return (
    <NavContainer>
      <InnerContainer>
        <LogoContainer>
          <DaliceLogo className={Logo}></DaliceLogo>
        </LogoContainer>
        <Menu>
          <Link id="shop" href="">
            Shop
          </Link>
          <Link href="">Discover</Link>
          <Link href="">Galleries</Link>
          <Link href="">Contact</Link>
          <HoverMenu id="hover-menu">
            <HoverMenuAlbumsContainer>
              <AlbumsTitleContainer>
                <h6>Albums</h6>
              </AlbumsTitleContainer>
              <AlbumsDisplay className={AlbumsContainer}></AlbumsDisplay>
            </HoverMenuAlbumsContainer>
          </HoverMenu>
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
  position: relative;
  background-color: var(--accent-primary);
  color: var(--content-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  :has(#shop:hover) #hover-menu,
  :has(#hover-menu-container:hover) #hover-menu,
  #hover-menu:hover {
    display: flex;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.25rem;
  padding-inline: 2rem;
`;

const LogoContainer = styled.div``;

const Menu = styled.div`
  --text-size: 0.9rem;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.8rem;
  font-size: var(--text-size);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const Logo = css`
  fill: var(--content-color);
  width: 100%;
  height: 4.5rem;
`;

// Shop Hover Menu

const HoverMenu = styled.div`
  text-transform: none;
  display: none;
  position: absolute;
  top: 100%;
  background-color: var(--accent-primary);
  width: 80%;
  height: 16rem;
  border-radius: 1rem;
  padding-inline: 1.25rem;
  padding-block: 2rem;
  z-index: 99;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const HoverMenuAlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AlbumsTitleContainer = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const AlbumsContainer = css`
  height: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;
