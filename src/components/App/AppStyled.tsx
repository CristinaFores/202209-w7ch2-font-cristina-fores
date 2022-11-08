import styled from "styled-components";

const AppStyled = styled.div`
  color: ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.backgroundColorPrimary};
  padding: 0 ${(props) => props.theme.paddingHorizonalBody};
  min-height: 100vh;
`;

export default AppStyled;
