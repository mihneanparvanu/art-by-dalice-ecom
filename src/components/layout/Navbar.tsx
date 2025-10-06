import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import Link from "next/link";

import { media } from "@/styles/breakpoints";

import DaliceLogo from "../icons/DaliceLogo";
import { LucideUser } from "lucide-react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { CircleUser } from "lucide-react";

import fetchAlbums from "@/data/FetchAlbums";

// Styles

const NavContainer = styled.header`
  --content-color: var(--white);
  color: var(--content-color);
  position: relative;
  background-color: var(--accent-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  #shop-dropdown:hover #hover-menu,
  #shop-dropdown:focus-within #hover-menu,
  #hover-menu:hover {
    display: flex;
  }
`;

const MobileNav = styled.nav`
  width: 100%;
  display: none;
  padding-block: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--accent-primary);
  color: white;
  padding-inline: 1rem;

  ${media.mobile} {
    display: flex;
  }
`;

const MobileIconsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const MobileLogoContainer = styled.div`
  width: 5rem;
`;

const DesktopNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.25rem;
  padding-inline: 2rem;

  ${media.mobile} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  z-index: 10;
`;

const DesktopMenu = styled.div`
  --text-size: 0.9rem;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  font-size: var(--text-size);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const AccountContainer = styled.div`
  font-size: 0.8rem;
  align-items: center;
  display: flex;
  gap: 0.125rem;
`;

const Logo = css`
  color: var(--content-color);
  width: 100%;
  height: 4.5rem;
`;

// Shop Hover Menu
const ShopDropdown = styled.div``;

const HoverMenu = styled.div`
  color: var(--content-color);
  margin: auto;
  left: 0;
  right: 0;
  text-transform: none;
  display: none;
  position: absolute;
  top: 100%;
  background-color: var(--accent-primary);
  width: 80%;
  height: 20rem;
  border-radius: 1rem;
  z-index: 98;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const HoverMenuAlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline: 1.5rem;
  padding-block: 2rem;
`;

const AlbumsTitleContainer = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const AlbumsContainer = styled.div`
  height: 100%;
  font-size: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const HoverMenuProductsContainer = styled.div`
  background-color: var(--accent-secondary);
  width: 100%;
  height: 100%;
  padding-inline: 1.5rem;
  padding-block: 2rem;
`;

export default async function DaliceNavbar() {
  const albums = await fetchAlbums();
  console.log(albums);
  return (
    <NavContainer>
      <MobileNav>
        <MobileIconsContainer>
          <Menu />
          <Search />
        </MobileIconsContainer>
        <MobileLogoContainer>
          <DaliceLogo></DaliceLogo>
        </MobileLogoContainer>
        <IconsContainer>
          <ShoppingBag />
          <CircleUser />
        </IconsContainer>
      </MobileNav>
      <DesktopNav role="nav">
        <LogoContainer>
          <Link href="/">
            <DaliceLogo className={Logo}></DaliceLogo>
          </Link>
        </LogoContainer>
        <DesktopMenu>
          <ShopDropdown id="shop-dropdown">
            <Link id="shop" href="">
              Shop
            </Link>
            <HoverMenu role="menu" id="hover-menu">
              <HoverMenuAlbumsContainer>
                <AlbumsTitleContainer>
                  <h6>Albums</h6>
                </AlbumsTitleContainer>
                <AlbumsContainer>
                  {albums.map((value, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: "/products",
                        query: { album: value },
                      }}
                    >
                      {value}
                    </Link>
                  ))}
                </AlbumsContainer>
              </HoverMenuAlbumsContainer>
              <HoverMenuProductsContainer></HoverMenuProductsContainer>
            </HoverMenu>
          </ShopDropdown>
          <Link href="">Discover</Link>
          <Link href="">Galleries</Link>
          <Link href="">Contact</Link>
        </DesktopMenu>
        <IconsContainer>
          <AccountContainer>
            <LucideUser></LucideUser>
            Account
          </AccountContainer>
        </IconsContainer>
      </DesktopNav>
    </NavContainer>
  );
}
