import {useNavigate, useParams} from "react-router-dom"
import Story from "../components/Stories/Story"
import {useEffect, useState} from "react"
import {getStory} from "../utils/apis"
import {IStory} from "../components/Stories/Story/types"
import Layout from "../components/Layout"

import {BiArrowBack} from 'react-icons/bi';

const StoryPage = () => {
    const {id} = useParams()
    const [story, setStory] = useState<IStory>()
    const storyId = Number(id)
    const navigate = useNavigate();

    useEffect(() => {
        getStory(storyId).then((story) => setStory(story))
    }, [storyId])

    return (
        <Layout>
            <span className="flex items-center cursor-pointer" onClick={() => navigate('/')}><BiArrowBack/>Back to the home page</span>
            {story && <Story data={story} fromHomePage/>}
        </Layout>
    )
}


export default StoryPage
