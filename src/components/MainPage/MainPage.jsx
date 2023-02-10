import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addStoriesAction, clearAttachedCommentsAction, clearStoriesAction, getNewsAction } from '../../utils/actionCreators';
import { getStory, getStoryIds } from '../../utils/usefullUtils';
import MainThemes from '../MainThemes/MainThemes';
import Story from '../Story';
import loader from './images/main-loader.gif';
import news from '../../wallpapers/news-logo.png';
import './MainPage.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const newsRedux = useSelector(state => state.news.newsRedux)

    const getStoriesFrom = () => {
        dispatch(clearStoriesAction());
        dispatch(clearAttachedCommentsAction());
        getStoryIds()
            .then(data => {
                dispatch(getNewsAction(data));
                data.map(async (elem) => {
                    let newData = await getStory(elem)
                    dispatch(addStoriesAction(newData, elem));
                })
            });
    }

    useEffect(() => {
        getStoryIds()
            .then(data => {
                dispatch(getNewsAction(data));
                data.map(async (elem) => {
                    let newData = await getStory(elem)
                    dispatch(addStoriesAction(newData, elem));
                })
            });

        const flagInterval = setInterval(() => {
            getStoriesFrom();
        }, 60000);
        return () => clearInterval(flagInterval)

    }, []);

    const handleUpdate = () => {
        getStoriesFrom();
    }

    return (
        <div className='main-page'>
            <header className='main-page-header'>
                <div className="header-menu">
                    <div>
                        <NavLink to={'/'} reloadDocument><img src={news} alt="news logo" /></NavLink>
                    </div>
                    <div>
                        <h1>Hacker News</h1>
                    </div>
                </div>

                <button onClick={handleUpdate}>Update news</button>
            </header>
            <main>
                {newsRedux && newsRedux.length > 0 ? newsRedux.map(elem => <Story key={elem} storyId={elem} />) : <p>wait</p>}
            </main>
            <div className="preloader">
                <img src={loader} alt="loader animation" />
            </div>
            <MainThemes />
        </div>
    );
}

export default MainPage;