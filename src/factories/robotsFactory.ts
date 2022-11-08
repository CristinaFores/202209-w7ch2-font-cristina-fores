import { Factory } from "fishery";
import { Robot } from "../redux/features/robotsSlice/types";
import { faker } from "@faker-js/faker";

const robotsFactory = Factory.define<Robot>(() => ({
  name: faker.name.fullName(),
  strength: faker.datatype.number({ max: 10 }),
  createdOn: `${faker.date.past()}`,
  image: faker.image.imageUrl(),
  speed: faker.datatype.number({ max: 10 }),
  _id: faker.random.alphaNumeric(),
}));

export const getRandomRobot = () => robotsFactory.build();

export const getRandomRobotsList = (number: number) =>
  robotsFactory.buildList(number);
