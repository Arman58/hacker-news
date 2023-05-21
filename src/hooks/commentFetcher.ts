import { useCallback, useEffect, useState } from "react";
import { getComments } from "../utils/apis";
import { SingleComment } from "../components/Comments/Comment/types";

const useCommentFetcher = (storyId: number) => {
  const [commments, setComments] = useState<SingleComment[]>([]);
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

  return { isLoading, commments, fetchComments };
};

export default useCommentFetcher;
