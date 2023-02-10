import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { timeConverter } from "../../utils/usefullUtils";
import './Story.scss';

const Story = ({ storyId }) => {

    const story = useSelector(state => state.stories.filteredStories);
    const StoryData = story[storyId];

    return StoryData && StoryData.url ? (<div className="story">
        <NavLink to={`/withredux/NewsPage/item${storyId}`}>{StoryData.title}</NavLink>
        <p>Score: {StoryData.score}</p>
        <p>By: {StoryData.by}</p>
        <p>Data: {timeConverter(StoryData.time)}</p>
    </div>) : (
        <div>
            Maybe it will be show later
        </div>
    )
}

export default Story;