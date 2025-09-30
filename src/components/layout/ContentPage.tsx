import { styled } from "@linaria/react";

const TitleContainer = styled.div`
  font-size: 2rem;
`;

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 85%;
  max-width: 90%;
`;

export default function ContentPage({ pageTitle }: { pageTitle: string }) {
  return (
    <Page>
      <Container>
        {" "}
        <TitleContainer>
          <h1> {pageTitle} </h1>
        </TitleContainer>
      </Container>
    </Page>
  );
}
