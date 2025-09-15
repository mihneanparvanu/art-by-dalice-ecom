import { styled } from "@linaria/react";
interface ButtonPrimaryProps {
  title: string;
  action?: () => void;
  className?: string;
}

const ButtonPrimaryStyled = styled.button`
  --text-size: 1rem;
  background-color: var(--accent-primary);
  color: var(--white);
  font-weight: 500;
  font-size: var(--text-size);
  padding-inline: calc(var(--text-size) * 2);
  padding-block: calc(var(--text-size) * 1);
  border-radius: calc(infinity * 1px);
`;

export default function ButtonPrimary({
  title,
  action,
  className,
}: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyled className={className} onClick={action}>
      {title}
    </ButtonPrimaryStyled>
  );
}
