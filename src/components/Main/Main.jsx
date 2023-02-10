import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { src } from '../../linksSrc/links';
import './Main.css';

const Main = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch(src)
            .then(res => res.json())
            .then(data => {
                setTodoList(data);
            })
            .catch(error => console.log(error.message));
    }, []);

    const result = todoList.map(elem => {
        return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed ? 'yes' : 'no'}</li>
    })

    return (
        <div>
            <NavLink to={'/withoutredux/sortedthere'}><button>sorted ABC</button></NavLink>
            <NavLink to={'/withoutredux/sortedback'}><button>sorted CBA</button></NavLink>
            <br />
            <NavLink to={'/withoutredux/completed'}><button>completed</button></NavLink>
            <NavLink to={'/withoutredux/notcompleted'}><button>uncompleted</button></NavLink>
            <ul>
                {result.length > 0 ? <>{result}</> : <>something going wrong</>}
            </ul>
        </div>
    );
}

export default Main;