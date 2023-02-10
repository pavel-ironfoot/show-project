import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import NewsPage from '../NewsPage';
import './WithRedux.scss';

const WithRedux = () => {

  return (  
      <div className="with-redux">
        <Routes>
        <Route path ='/' element ={<MainPage />}/>
        <Route path ='/newspage/:item' element={<NewsPage />}/>
        </Routes>
      </div>
    
  );
}

export default WithRedux;