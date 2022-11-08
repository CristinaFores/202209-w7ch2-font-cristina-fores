import Header from "../../components/Header/Header";
import RobotForm from "../../components/RobotForm/RobotForm";

interface RobotFormPageProps {
  isNew: boolean;
}

const RobotFormPage = ({ isNew }: RobotFormPageProps) => {
  return (
    <>
      <Header />
      <h2>{isNew ? "Create a new robot" : "Edit your robot"}</h2>
      <RobotForm isNew={isNew} />
    </>
  );
};

export default RobotFormPage;
