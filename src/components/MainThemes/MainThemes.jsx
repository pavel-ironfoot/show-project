import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeAction } from '../../utils/actionCreators';
import './MainThemes.scss';

const MainThemes = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.mainTheme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <div className='theme-switcher'>
            <div className='main-themes'>
                <p>change theme</p>
                <div className='open-theme-change'>
                    <div className='button-settheme light-theme' onClick={() => dispatch(changeThemeAction('light'))}>
                    </div>
                    <div className='button-settheme lighter-theme' onClick={() => dispatch(changeThemeAction('lighter'))}>
                    </div>
                    <div className='button-settheme dark-theme' onClick={() => dispatch(changeThemeAction('dark'))}>
                    </div>
                    <div className='button-settheme darker-theme' onClick={() => dispatch(changeThemeAction('darker'))}>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default MainThemes;