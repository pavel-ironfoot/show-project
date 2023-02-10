import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChoosePage from './components/ChoosePage';
import NewsPage from './components/NewsPage';
import NotFoundPage from './components/NotFoundPage';
import WithoutRedux from './components/WithoutRedux/WithoutRedux';
import WithRedux from './components/WithRedux/WithRedux';
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<ChoosePage />} />
          <Route path='/withoutredux/*' element={<WithoutRedux />} />
          <Route path ='/withredux/*' element ={<WithRedux />}/>
          <Route path ='/withredux/newspage/:item' element={<NewsPage />}/>
          <Route path='/*' element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
