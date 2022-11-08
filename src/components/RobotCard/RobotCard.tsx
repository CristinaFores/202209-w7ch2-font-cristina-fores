import useApi from "../../hooks/useApi";
import { Robot } from "../../redux/features/robotsSlice/types";
import Button from "../Button/Button";
import { RobotCardStyled } from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { image, name, speed, createdOn, strength, _id: id },
}: RobotCardProps): JSX.Element => {
  const { deleteRobotById } = useApi();

  return (
    <RobotCardStyled className="card-robot">
      <div className="card-robot__image-container">
        <img className="card-robot__image" src={`${image}`} alt={name} />
        <ul className="card-robot__info">
          <li className="card-robot__text">{`🏃‍♂️: ${speed}`} </li>
          <li className="card-robot__text">{`💪: ${strength}`}</li>
          <li className="card-robot__text">{`📆: ${createdOn}`}</li>
        </ul>
      </div>
      <h3 className="card-robot__title">{`${name}`}</h3>
      <div className="card-robot__buttons">
        <Button text="Edit" />
        <Button action={() => deleteRobotById(id!)} text="Delete" />
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
