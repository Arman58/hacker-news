import {useState, useEffect} from 'react';
import {getStories} from '../utils/apis';
import {IStory} from '../components/Stories/Story/types';

const useDataFetcher = () => {
    const [stories, setStories] = useState<IStory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchStories = () => {
        setIsLoading(true);
        getStories()
            .then((stories) => {
                setStories(stories.sort((a: IStory, b: IStory) => b.time - a.time));
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchStories()
        const interval = setInterval(fetchStories, 60000);
        return () => clearInterval(interval);
    }, [])


    return {isLoading, stories, fetchStories};
};

export default useDataFetcher;
