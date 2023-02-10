import { Route, Routes } from 'react-router';
import Aside from '../Aside';
import Header from '../Header';
import Main from '../Main';
import SingleToDo from '../SingleToDo';
import Sorted from '../Sorted';
import UsersToDos from '../UsersToDos';

import './WithoutRedux.scss';

const WithoutRedux = () => {

  return (
    
      <div className="without-redux">
        <Header />
        <Aside />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user/:id/todo/:number' element={<SingleToDo />} />
          <Route path='/:sorted' element={<Sorted tusks={Sorted} />} />
          <Route path='/user/:id' element={<UsersToDos />} />
        </Routes>
      </div>
    
  );
}

export default WithoutRedux;