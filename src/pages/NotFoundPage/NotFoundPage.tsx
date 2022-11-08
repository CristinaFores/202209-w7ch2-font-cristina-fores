import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageStyled>
      <Header />
      <div className="not-found-page__message">
        <span className="not-found-page__code">404</span>
        <span>Page not found!</span>
        <Button text="Home" action={() => navigate("/")} />
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
