import axios from 'axios';
import {BASE_API_URL} from './constant';
import {IStory} from '../components/Stories/Story/types';
import {IComment} from '../components/Comments/Comment/types';

export const getStory = async (id: number): Promise<IStory> => {
    try {
        const {data} = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return data;
    } catch (error) {
        throw error
    }
};

export const getStories = async (): Promise<IStory[]> => {
    try {
        const {data: storyIds} = await axios.get(
            `${BASE_API_URL}/topstories.json`
        );
        return await Promise.all(storyIds.slice(0, 100).map(getStory));
    } catch (error) {
        throw error
    }
};

export const getComment = async (id: number): Promise<IComment> => {
    try {
        const {data} = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return data;
    } catch (error) {
        throw error
    }
};

export const getComments = async (id: number): Promise<IComment[]> => {
    try {
        const commentIds = (await getStory(id)).kids
        return await Promise.all(commentIds.map(getComment));
    } catch (error) {
        throw error
    }
};

export const getNestedComments = async (id: number): Promise<IComment[]> => {
    try {
        const commentIds = (await getComment(id)).kids
        return await Promise.all(commentIds.map(getComment));
    } catch (error) {
        throw error
    }
}
