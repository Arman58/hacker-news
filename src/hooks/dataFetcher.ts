import { useState, useEffect, useCallback } from 'react';
import { getStories } from '../utils/apis';
import { Data } from '../components/Stories/Story/types';

const useDataFetcher = () => {
  const [stories, setStories] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStories = useCallback(() => {
    setIsLoading(true);
    getStories()
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      })
  },[])

   useEffect(() => {
    fetchStories()
   },[fetchStories])
  useEffect(() => {
    
    setInterval(fetchStories, 60000);
  }, [fetchStories]);


  return { isLoading, stories,fetchStories };
};

export default useDataFetcher;