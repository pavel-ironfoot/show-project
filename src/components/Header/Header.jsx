import { NavLink, useNavigate } from 'react-router-dom';
import MainThemes from '../MainThemes/MainThemes';
import logo from '../../wallpapers/user-logo.png';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='Header'>
            <div className='header-main'>
                <div>
                    <NavLink to={'/'} reloadDocument><img src={logo} alt="choose logo" /></NavLink>
                </div>  
                <div className='header-main-elem'>
                    <NavLink  to={'/withoutredux/'} reloadDocument>Home page</NavLink>
                </div>                  
                <div className='header-main-elem' onClick={()=>navigate(-1)}>
                    Go Back
                </div>
                <div className='header-main-elem' onClick={()=>navigate(+1)}>
                    Go Forward
                </div>
            </div>
            <MainThemes />
        </header>
    );
}

export default Header;