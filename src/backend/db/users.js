// import { v4 as uuid } from "uuid";
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
    bio: "An accomplished software engineer with a passion for innovation",
    website: "https://the-decor-supermarket.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Olivia",
        lastName: "Wilson",
        username: "Olivia Wilson",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
      },
      {
        _id: "ab8zWjEefd",
        firstName: "Ethan",
        lastName: "Thompson",
        username: "Ethan Thompson",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
      },
    ],
    followers: [
      {
        _id: "79Gksh4otl",
        firstName: "Lily",
        lastName: "Davis",
        username: "Lily Davis",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
      },
    ],
  },
  {
    _id: "2",
    firstName: "Himayra",
    lastName: "khan",
    username: "himayra khan",
    password: "himayra@123",
    bio: " A dedicated nurse who goes above and beyond to provide compassionate care.",
    website: "https://furtherfeatureofapp.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",

    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Noah",
        lastName: "Anderson",
        username: "Noah Anderson",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Jacob",
        lastName: "Mitchell",
        username: "jacobmitch",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
      },
    ],
  },
  {
    _id: "3",
    firstName: "Merry",
    lastName: "karl",
    username: "merry karl",
    password: "merry@123",
    bio: "An aspiring entrepreneur with a knack for problem-solving and strategic thinking.",
    website: "https://shaheen-siddiqui.github.io/PORTFOLIO_22/index.html",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:
      "https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg",
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Ava",
        lastName: "Martinez",
        username: "Ava Martinez",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Martinez",
        lastName: "Ava",
        username: "Martinez Ava",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
      },
    ],
    followers: [],
  },
  {
    _id: "4",
    firstName: "Jays",
    lastName: "supuis",
    username: "jays supuis",
    password: "jays@123",
    bio: " A talented artist who uses her creativity to express unique perspectives on life.",
    website: "https://tinyurl.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    imgUrl:"https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
    following: [],
    followers: [],
  },
];
