import {useCallback, useEffect, useState} from "react";
import {getComments} from "../utils/apis";
import {IComment} from "../components/Comments/Comment/types";

const useCommentFetcher = (storyId: number) => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchComments = useCallback(() => {
        setIsLoading(true);
        getComments(storyId)
            .then((comments) => {
                setComments(comments);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [storyId]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return {isLoading, comments, fetchComments};
};

export default useCommentFetcher;
