import {  useNavigate, useParams } from "react-router-dom"
import Story from "../components/Stories/Story"
import { useEffect, useState } from "react"
import { getStory } from "../utils/apis"
import { Data } from "../components/Stories/Story/types"
import Layout from "../components/Layout"

import { BiArrowBack } from 'react-icons/bi';

const StoryPage = () => {
    const {id} = useParams()
    const [data,setData] = useState<Data>()
    const storyId = Number(id)
    const navigate = useNavigate();

    useEffect(() => {
        getStory(storyId).then((story) => setData(story))
    },[storyId])

    return(
        <Layout>
            <span className="cursor-pointer" onClick={() => navigate('/')}><BiArrowBack/>Back to the home page</span>
         {data && <Story data={data} fromHomePage/>}
        </Layout>
    )
    }
    
    
    export default StoryPage