import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColorPrimary};
  background-color: ${(props) => props.theme.colorPrimary};
  font-weight: 600;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover,
  :focus {
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColorPrimary};
  }
`;

export default ButtonStyled;
