import {Link} from "react-router-dom";
import {StoryProps} from "./types";
import StoryComments from "../../Comments";
import DataDate from "../../DataDate";

const Story: React.FC<StoryProps> = ({data, fromHomePage}) => {


    if (!fromHomePage) {
        return (
            <Link to={`story/${data.id}`}>
                <h5>{data.title}</h5>
                <span className="text-xs text-gray-400">
                    <span> {data.score} </span> points by {data.by}
                    <DataDate time={data.time}/>
          | {data.kids && data.kids.length} comments
        </span>
            </Link>
        );
    }

    return (
        <>
            <Link to={data.url}>
                <h5>{data.title}</h5>
                <span className="text-xs text-gray-400">
          {" "}
                    {data.score} points by {data.by}
                    <DataDate time={data.time}/>
          | {data.kids && data.kids.length} comments
        </span>
            </Link>
            <StoryComments parentId={data.id}/>
        </>
    );
};

export default Story;
