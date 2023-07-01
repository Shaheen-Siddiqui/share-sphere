import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    content:
      "Laptops are portable computers that provide users with flexibility and convenience for various computing tasks on the go.",
    imgUrl:
      "https://1fid.com/wp-content/uploads/2022/10/hijab-dp-18-1024x1022.jpg",
    postedImages:
      "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shaheen amaan",
    createdAt: "2023-06-30",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),

    content:
      "Development is a continuous journey of growth and progress, encompassing personal, professional, and societal advancements that contribute to positive change and better quality of life for individuals and communities alike. It involves adapting to new challenges, acquiring new skills, and embracing innovation to shape a brighter future.",
    imgUrl:
      "https://1fid.com/wp-content/uploads/2022/10/hijab-dp-18-1024x1022.jpg",
    postedImages:
      "https://sanjeevdatta.com/wp-content/uploads/2022/02/7-career-development-strategies-for-successful-career.jpg",

    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shaheen amaan",
    createdAt: "2023-06-30",
    updatedAt: formatDate(),
    comment: [],
  },
  {
    _id: uuid(),
    content:
      "Binary search is a fast and efficient search algorithm that operates on a sorted array or list. It works by repeatedly dividing the search space in half until the target element is found or determined to be absent.",
    postedImages:
      "https://www.crio.do/blog/content/images/2022/08/Understanding-Binary-Search-Algorithm.png",

    imgUrl:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "himayra khan",
    createdAt: "2023-06-1",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),
    content:
      "A stylish look effortlessly merges sophistication and individuality, capturing attention with its impeccable sense of fashion and attention to detail, leaving a lasting impression wherever it goes.",
    imgUrl:
      "https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg",
    postedImages:
      "https://www.sunofjapan.com/wp-content/uploads/2023/03/KO098-SG.jpg",
    likes: {
      likeCount: 300,
      likedBy: [],
      dislikedBy: [],
    },
    username: "merry karl",
    createdAt: "2023-06-15",
    updatedAt: formatDate(),
    comment: [],
  },
  {
    _id: uuid(),
    content:
      "Nature is a mesmerizing tapestry of beauty and balance, showcasing the intricate interplay between living organisms and the environment, reminding us of our deep connection to the world around us.",
    postedImages:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    imgUrl:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "himayra khan",
    createdAt: "2023-06-28",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),
    content:
      "Data Structures and Algorithms (DSA) are fundamental concepts in computer science. They provide efficient ways to organize and manipulate data, enabling faster and optimized algorithms for solving complex problems",
    postedImages:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221017172544/Introduction-to-Data-Structures-and-Algorithms-DSA.png",

    imgUrl:
      "https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "himayra khan",
    createdAt: "2023-06-1",
    updatedAt: formatDate(),
    comment: [],
  },
  {
    _id: uuid(),
    content:
      "Care is a compassionate and nurturing attitude towards others, driven by empathy and concern for their well-being. It involves actively listening, supporting, and showing kindness, while also considering the needs and feelings of those we care for. Care fosters a sense of connection, creating a safe and supportive environment where individuals can thrive.",
    imgUrl:
      "https://1fid.com/wp-content/uploads/2022/10/hijab-dp-18-1024x1022.jpg",
    postedImages: null,

    likes: {
      likeCount: 688,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shaheen amaan",
    createdAt: "2023-05-23",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),

    content:
      "YouTube is a popular video-sharing platform that allows users to upload, watch, and engage with a wide variety of content, from music videos and tutorials to vlogs and live streams",
    imgUrl:
      "https://1fid.com/wp-content/uploads/2022/10/hijab-dp-18-1024x1022.jpg",
    postedImages:
      "https://blogen.influence4you.com/wp-content/uploads/2020/01/alexander-shatov-niUkImZcSP8-unsplash-1-scaled.jpg",
    likes: {
      likeCount: 900,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Shaheen amaan",
    createdAt: "2023-06-30",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),
    content:
      "Social media has become an integral part of modern life, connecting individuals from all corners of the globe and fostering instant communication and information sharing. However, responsible and mindful use is crucial to maintain a healthy balance between virtual interactions and real-world experiences.",
    postedImages: "https://www.ncsc.gov.uk/images/social-icons.jpg",

    imgUrl:
      "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jays supuis",
    createdAt: "2023-04-1",
    updatedAt: formatDate(),
    comment: [],
  },

  {
    _id: uuid(),
    content:
      "LinkedIn is a professional networking platform designed for business and career-related connections, allowing users to build a professional profile, connect with colleagues and industry professionals, and explore job opportunities",
    postedImages:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzz83Od38sYR4nls5rtwqEEnnqdRFJKiJE0gADqCS-cdyk93XRNLw_sqJ-5TAc7oIELs&usqp=CAU",

    imgUrl:
      "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jays supuis",
    createdAt: "2023-04-1",
    updatedAt: formatDate(),
    comment: [],
  },
];
