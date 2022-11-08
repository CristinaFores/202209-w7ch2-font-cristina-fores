import styled from "styled-components";

const RobotsListStyled = styled.main`
  padding-bottom: 4rem;
  .robots-list {
    &__title {
      padding-bottom: 1rem;
    }
    &__list {
      display: grid;
      grid-template-columns: 1;
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 480px) {
    .robots-list {
      &__list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media only screen and (min-width: 700px) {
    .robots-list {
      &__list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media only screen and (min-width: 920px) {
    .robots-list {
      &__list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default RobotsListStyled;
