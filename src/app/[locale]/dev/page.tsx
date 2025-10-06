import { styled } from "@linaria/react";

const DevContainer = styled.main`
  height: 50dvh;
  width: 100%;
  background-color: var(--surface-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export default function Dev() {
  return <DevContainer></DevContainer>;
}
