import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled COmponents-</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  font-weight: 600;
  padding: 8px;
  margin: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
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
