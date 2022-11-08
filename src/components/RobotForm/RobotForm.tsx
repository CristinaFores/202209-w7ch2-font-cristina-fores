import React, { useState } from "react";
import Button from "../Button/Button";
import RobotFormStyled from "./RobotFormStyled";

interface RobotFormStructure {
  name: string;
  strength: number;
  speed: number;
  image: string;
}

interface RobotFormProps {
  isNew: boolean;
}

const initialFormData: RobotFormStructure = {
  name: "",
  speed: 0,
  strength: 0,
  image: "",
};

const RobotForm = ({ isNew }: RobotFormProps) => {
  const [formData, setFormData] = useState<RobotFormStructure>(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <RobotFormStyled>
      <div className="robot-form__form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={handleFormChange}
          type="text"
          className="robot-form__input"
          placeholder="Write the robot's name here"
          autoComplete="off"
        ></input>
      </div>
      <div className="robot-form__form-group">
        <label htmlFor="speed">Speed</label>
        <input
          id="speed"
          value={formData.speed}
          onChange={handleFormChange}
          type="number"
          min="0"
          max="10"
          className="robot-form__input"
        ></input>
      </div>
      <div className="robot-form__form-group">
        <label htmlFor="strength">Strength</label>
        <input
          id="strength"
          value={formData.strength}
          onChange={handleFormChange}
          type="number"
          min="0"
          max="10"
          className="robot-form__input"
        ></input>
      </div>
      <div className="robot-form__form-group">
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          value={formData.image}
          onChange={handleFormChange}
          type="url"
          className="robot-form__input"
          placeholder="Paste the image url here"
          autoComplete="off"
        ></input>
      </div>
      <Button text={isNew ? "Create Robot" : "Edit Robot"} />
    </RobotFormStyled>
  );
};

export default RobotForm;
