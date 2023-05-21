import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { CommentsProps } from "./types";
import { SingleComment } from "./Comment/types";
import Comment from "./Comment/index"

const CommentsUI: React.FC<CommentsProps> = ({ comments, refetch }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <FiRefreshCcw onClick={() => refetch()} />
      {comments.map((comment:SingleComment, index:number) => <Comment key={index} comment={comment} />)}
    </div>
  );
};

export default CommentsUI;
