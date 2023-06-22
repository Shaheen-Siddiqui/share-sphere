import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    "_id": 1,
    "firstName": "Shaheen",
    "lastName": "amaan",
    "username": "Shaheen amaan",
    "password": "Shaheen@143",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    firstName: "Humayra",
    lastName: "khan",
    username: "Humayra khan",
    password: "Humayra@143",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
