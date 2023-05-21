import React from "react";
import {FiRefreshCcw} from "react-icons/fi";
import {CommentsProps} from "./types";
import Comment from "./Comment/index"
import useCommentFetcher from "../../hooks/commentFetcher";

const StoryComments: React.FC<CommentsProps> = ({parentId}) => {
    const {
        isLoading,
        comments,
        fetchComments: reFetch,
    } = useCommentFetcher(parentId);
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <FiRefreshCcw onClick={() => reFetch()}/>
            {isLoading && <div>Loading...</div>}
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default StoryComments;
