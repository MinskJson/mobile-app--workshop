// import axios from "axios";
// import { UserType } from "../models/UserType.model";
import { PostType } from "./PostType.model";

const generatePost = () => {
  return {
    id: Math.random(),
    userId: Math.random(),
    img: "https://placeimg.com/640/480/people",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
  };
}

export const getPosts = async ():Promise<PostType[]> => {
  return new Promise(res => {
    res(new Array(100).fill(0).map(() => generatePost()));
  });
  // axios.get('/api/users').finally(() => {})
}

export const togglePostLike = async (userId: number, postId: number):Promise<PostType> => {
  return new Promise(res => {
    res(generatePost());
  });
  // axios.get('/api/users').finally(() => {})
}