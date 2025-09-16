import { styled } from "@linaria/react";
import DaliceLogo from "../icons/DaliceLogo";

const FooterContainer = styled.div`
  background-color: var(--accent-primary);
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div``;

export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <DaliceLogo showText={true}></DaliceLogo>
      </LogoContainer>
    </FooterContainer>
  );
}
