import styled from "styled-components";

export const RobotCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.6rem;
  .card-robot {
    &__image-container {
      position: relative;
      border-radius: 10px;
    }
    &__image {
      object-fit: cover;
      object-position: top;
      height: 100%;
      min-width: 100%;
      display: block;
      border-radius: 10px;
    }
    &__info {
      position: absolute;
      background-color: ${(props) => props.theme.backgroundColorPrimary};
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      border-radius: 10px;

      &:hover,
      :focus {
        opacity: 0.9;
      }
    }
    &__text {
      font-size: 1.2rem;
    }
    &__title {
      display: flex;
      justify-content: center;
    }
    &__buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;

      &:hover,
      :focus {
        background-color: ${(props) => props.theme.backgroundColorPrimary};
      }
    }
  }

  @media only screen and (min-width: 480px) {
    .card-robot {
      &__image {
        height: 300px;
      }
    }
  }
`;
