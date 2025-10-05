import { styled } from "@linaria/react";

import Image from "next/image";

const NoImageContainer = styled.div`
  background-color: var(--surface-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: var(--surface-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export default function ProductDisplay({
  imgURL,
  className,
}: {
  imgURL?: string;
  className?: string;
}) {
  if (imgURL == null) return <NoImageContainer>No image</NoImageContainer>;

  return (
    <Container className={`${className}`}>
      <Image
        src={imgURL}
        alt=""
        width={500}
        height={500}
        className="object-contain"
      />
    </Container>
  );
}
