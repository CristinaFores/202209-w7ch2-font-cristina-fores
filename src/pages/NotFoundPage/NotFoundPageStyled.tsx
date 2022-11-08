import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  height: 100vh;
  .not-found-page {
    &__message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      gap: 2rem;
    }
    &__code {
      font-size: 3rem;
      font-weight: 900;
    }
  }
`;

export default NotFoundPageStyled;
