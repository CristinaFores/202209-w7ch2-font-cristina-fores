import styled from "styled-components";

const RobotFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem 0;
  .robot-form {
    &__form-group {
      display: flex;
      flex-direction: column;
    }
    &__input {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
    }
  }
`;

export default RobotFormStyled;
