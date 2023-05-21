import useDataFetcher from "../../hooks/dataFetcher";
import Story from "./Story";
import {FiRefreshCcw} from "react-icons/fi";

const Stories = () => {
    const {isLoading, stories, fetchStories: reFetch} = useDataFetcher();

    return (
        <div>
            {isLoading && <div>...loading</div>}
            <FiRefreshCcw onClick={() => reFetch()}/>
            {stories.map((story) => (
                <Story key={story.id} data={story}/>
            ))}
        </div>
    );
};

export default Stories;
