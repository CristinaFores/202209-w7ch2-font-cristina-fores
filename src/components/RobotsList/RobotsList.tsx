import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = () => {
  const { loadAllRobots } = useApi();
  const robots = useAppSelector((state) => state.robots.robotsList);

  useEffect(() => {
    loadAllRobots();
  }, [loadAllRobots]);

  return (
    <RobotsListStyled className="robots-list">
      <h2 className="robots-list__title">Robots</h2>
      {robots && (
        <ul className="robots-list__list">
          {robots.map((robot) => (
            <RobotCard robot={robot} key={robot._id} />
          ))}
        </ul>
      )}
    </RobotsListStyled>
  );
};

export default RobotsList;
