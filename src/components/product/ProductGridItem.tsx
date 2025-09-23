import { HTMLAttributes } from "react";
import { styled } from "@linaria/react";
import Image from "next/image";

interface ProductGridItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  imageURL?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 100%;
  color: var(--content-primary);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
  background-color: var(--surface-secondary);
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  padding-block: 2rem;
  overflow: hidden;

  .image {
    height: 80%;
    width: 80%;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-block: 0.4em;
  padding-inline: 0.8em;

  p {
    color: var(--content-secondary);
    font-size: 0.9em;
  }
`;

const NoImage = styled.div``;

export default function ProductGridItem({
  title,
  price,
  imageURL,
}: ProductGridItemProps) {
  return (
    <Container>
      {imageURL ? (
        <ImageContainer>
          <Image
            className="image"
            objectFit="cover"
            width="500"
            height="850"
            src={imageURL}
            alt=""
          />
        </ImageContainer>
      ) : (
        <NoImage>No image</NoImage>
      )}

      <TextContainer>
        <h4>{title}</h4>
        <p>{price}</p>
      </TextContainer>
    </Container>
  );
}
