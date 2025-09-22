import { styled } from "@linaria/react";

import Image from "next/image";

export default function ProductDisplay({
  imgURL,
  className,
}: {
  imgURL?: string;
  className?: string;
}) {
  if (imgURL == null) return null;

  const Container = styled.div`
    background-color: var(--surface-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `;

  return (
    <Container className={`${className}`}>
      <Image
        src={imgURL}
        alt=""
        width={500}
        height={500}
        className="object-contain "
      />
    </Container>
  );
}
