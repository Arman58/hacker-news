import { CommentProps } from "../Comment/types";

const NestedComments: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex ml-10">
      <div>
        <span>by {comment.by}</span>
        <p className="text-gray-700">{comment.text}</p>
      </div>
    </div>
  );
};

export default NestedComments;
