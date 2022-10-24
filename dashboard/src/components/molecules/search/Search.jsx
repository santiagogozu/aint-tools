import React from "react";
import "./Search.scss";
import { TodoContext } from "../../context/context";
import {TodoList} from "../../molecules/list/List"

const Search = () => {

    const {searchedTodos, setSearchValue, searchValue}=React.useContext(TodoContext);

    const onSearchValueChange =(e)=>{
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return (
        <div>
            <input
                className="TodoSearch"
                placeholder="Ingrese datos a buscar"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <TodoList>
                {searchedTodos.map(todo =>(todo.text))}
            </TodoList>
        </div>
        
    );
};

export default Search;
