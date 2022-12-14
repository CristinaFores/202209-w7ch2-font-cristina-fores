import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
}

const Button = ({ text, action }: ButtonProps) => {
  return <ButtonStyled onClick={action}>{text}</ButtonStyled>;
};

export default Button;
