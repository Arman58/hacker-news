import {useState,} from 'react';
import {getNestedComments} from '../utils/apis';
import {IComment} from '../components/Comments/Comment/types';

const useNestedCommentFetcher = () => {
    const [nestedComments, setNestedComments] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchNestedComments = (commentId: number) => {
        setIsLoading(true)
        getNestedComments(commentId)
            .then((nestedComments) => {
                setNestedComments(nestedComments)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }

    return {isLoading, nestedComments, fetchNestedComments};
};

export default useNestedCommentFetcher;
