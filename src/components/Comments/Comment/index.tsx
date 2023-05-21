import { useState } from "react";
import useNestedCommentFetcher from "../../../hooks/nestedCommentFetcher";
import { CommentProps } from "./types";
import NestedComments from "../NestedComments";

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { fetchNestedComments, nestedComments } = useNestedCommentFetcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    fetchNestedComments(comment.id);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col mb-4">
      <div>
        <span>by {comment.by}</span>
        <p className="text-gray-700">{comment.text}</p>
      </div>
      {comment.kids && (
        <span className="cursor-pointer" onClick={handleClick}>
          show replys <span>({comment.kids.length}) </span>
        </span>
      )}

      {isOpen ? (
        <div>
          {nestedComments &&
            nestedComments.map((comment) => (
              <NestedComments key={comment.id} comment={comment} />
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
