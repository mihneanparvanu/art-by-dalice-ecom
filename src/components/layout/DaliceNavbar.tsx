import { css } from "@linaria/core"
import { styled } from "@linaria/react"
import DaliceLogo from "../../../public/icons/DaliceLogo"

const NavContainer = styled.div`
  display: flex;
justify-content: start;
width: 100%;
height: fit-content;
padding-block: 0.5rem;
padding-inline: 2rem;
background-color: var(--accent-primary);
`

export default function DaliceNavbar () {
  return <NavContainer>
    <div className={logoContainer}>
      <DaliceLogo fill="#ffffff" 
      className={logo}></DaliceLogo>
    </div>
</NavContainer>
}

// Styles

const logoContainer = css`
height: 96px;
`

const logo = css`
width: 100%;
height: 100%;
`
