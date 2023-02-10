import { NavLink } from "react-router-dom";
import MainThemes from "../MainThemes/MainThemes";
import logo from '../../wallpapers/dwarf-logo.png';
import './ChoosePage.scss';

const ChoosePage = () =>{
    return (
        
            <div className="choose-page">
                <header className="choose-page-header">
                    <div>
                        <NavLink to={'/'} reloadDocument><img src={logo} alt="choose logo" /></NavLink>
                    </div>
                    <div>
                        <h1>Choose Page</h1>
                    </div>
                </header>
                <main>
                    <p>In this project I use Redux</p>
                    <NavLink to={'/withredux'}>
                        <button>with Redux</button>
                    </NavLink>
                    <p>In this project I didn't use Redux</p>
                    <NavLink to={'/withoutredux/'}>
                        <button>Whithout Redux</button>
                    </NavLink>
                </main>     
                <MainThemes />      
            </div>
        
    );
}

export default ChoosePage;