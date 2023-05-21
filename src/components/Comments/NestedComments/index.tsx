import {CommentProps} from "../Comment/types";
import Info from "../../Info";

const NestedComments: React.FC<CommentProps> = ({comment}) => {
    return (
        <div className="flex ml-10">
            <Info by={comment.by} time={comment.time} text={comment.text}/>
        </div>
    );
};

export default NestedComments;
