/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    font-weight: 600;
    padding: 8px;
    margin: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion-</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: pink;
    color: #fff;
  }
`;
