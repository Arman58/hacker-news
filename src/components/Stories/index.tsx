import useDataFetcher from "../../hooks/dataFetcher";
import Story from "./Story";
import { FiRefreshCcw } from "react-icons/fi";
import { Data } from "./Story/types";

const Stories = () => {
  const { isLoading, stories, fetchStories: reFetch } = useDataFetcher();

  const data = stories.sort((a: Data, b: Data) => b.time - a.time);
  return (
    <div>
      {isLoading && <div>...loading</div>}
      <FiRefreshCcw onClick={() => reFetch()} />
      {data.map((story) => (
        <Story key={story.id} data={story} />
      ))}
    </div>
  );
};

export default Stories;
