import { styled } from "@linaria/react"

export default function AlbumsHoverMenu ({className}: {className: string}) {
  const Container = styled.div`
  position: absolute;
  top: 90px;

  background-color: var(--white);
  width: 60%;
  height: 15rem;
  z-index: 100;
  border: 1px solid var(--white);

  `
 
  return <Container  className={className}>
Test
  </Container>
}