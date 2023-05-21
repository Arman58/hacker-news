import { Link } from "react-router-dom";
import { StoryProps } from "./types";
import CommentsUI from "../../Comments";
import useCommentFetcher from "../../../hooks/commentFetcher";

const Story: React.FC<StoryProps> = ({ data, fromHomePage }) => {
  const {
    isLoading,
    commments,
    fetchComments: refetch,
  } = useCommentFetcher(data.id);

  console.log(commments, "commments");

  if (!fromHomePage) {
    return (
      <Link to={`story/${data.id}`}>
        <h5>{data.title}</h5>
        <span className="text-xs text-gray-400">
          {" "}
          {data.score} points by {data.by}
          <span className="ml-1">
            {new Date(data.time * 1000).toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
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
          <span className="ml-1">
            {new Date(data.time * 1000).toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          | {data.kids && data.kids.length} comments
        </span>
      </Link>
      {isLoading && <div>Loading...</div>}
      <CommentsUI comments={commments} refetch={refetch} />
    </>
  );
};

export default Story;
