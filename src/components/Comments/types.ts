import { SingleComment } from "./Comment/types";



  export type CommentsProps ={
    comments:SingleComment[],
    refetch:() => void;
  }