import {useState} from "react";
import useNestedCommentFetcher from "../../../hooks/nestedCommentFetcher";
import {CommentProps} from "./types";
import NestedComments from "../NestedComments";
import Info from "../../Info";

const Comment: React.FC<CommentProps> = ({comment}) => {
    const {fetchNestedComments, nestedComments} = useNestedCommentFetcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        fetchNestedComments(comment.id);
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col mb-4">
            <Info by={comment.by} time={comment.time} text={comment.text}/>
            {comment.kids && (
                <span className="cursor-pointer font-bold" onClick={handleClick}>
          reply <span>({comment.kids.length}) </span>
        </span>
            )}

            {isOpen ? (
                <div>
                    {nestedComments &&
                    nestedComments.map((comment) => (
                        <NestedComments key={comment.id} comment={comment}/>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Comment;
