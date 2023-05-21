import axios from 'axios';
import { BASE_API_URL } from './constant';
import { Data } from '../components/Stories/Story/types';
import { SingleComment } from '../components/Comments/Comment/types';

export const getStory = async (id:number):Promise<Data> => {
  try {
    const {data} = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    throw error
  }
};

export const getStories = async ():Promise<Data[]> => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 4).map(getStory));
    return stories;
  } catch (error) {
    throw error
  }
};

export const getComment = async (id:number):Promise<SingleComment> => {
  try {
    const {data} = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    throw error
  }
};

export const getComments = async (id:number):Promise<SingleComment[]> => {
  try {
    const commentIds =  (await getStory(id)).kids
    const comments = await Promise.all(commentIds.map(getComment));
    return comments;
  } catch (error) {
    throw error
  }
};

export const getNestedComments = async (id:number):Promise<SingleComment[]> => {
  try {
    const commentIds =  (await getComment(id)).kids
    const comments = await Promise.all(commentIds.map(getComment));
    return comments;
  } catch (error) {
    throw error
  }
}