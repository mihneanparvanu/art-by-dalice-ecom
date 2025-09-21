import { styled } from "@linaria/react";

import Image from "next/image";

export default function ProductDisplay({ imgURL }: { imgURL?: string }) {
  if (imgURL == null) return null;

  const Container = styled.div`
    background-color: var(--surface-primary);
    width: 65%;
  `;

  return (
    <Container>
      <Image
        src={imgURL}
        alt=""
        width={500}
        height={500}
        className="object-contain h-full w-full"
      />
    </Container>
  );
}
