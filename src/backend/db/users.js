import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    firstName: "Shaheen",
    lastName: "amaan",
    username: "Shaheen amaan",
    password: "Shaheen@143",
    imgUrl:
      "https://1fid.com/wp-content/uploads/2022/10/hijab-dp-18-1024x1022.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2",
    firstName: "Himayra",
    lastName: "khan",
    username: "himayra khan",
    password: "himayra@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    _id: "3",
    firstName: "Merry",
    lastName: "karl",
    username: "merry karl",
    password: "merry@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg",
  },
  {
    _id: "4",
    firstName: "Jays",
    lastName: "supuis",
    username: "jays supuis",
    password: "jays@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl: "https://avatars.githubusercontent.com/u/77974484?v=4",
  },
];
