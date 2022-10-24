import React from "react";
import Burger from "../molecules/burger-menu/Burger";
import Search from "../molecules/search/Search";
import {TodoList} from "../molecules/list/List";
import { LocalStorage } from "./LocalStorage";

//permite crear contexto el cual tiene {Provider, Consumer}
const TodoContext = React.createContext() 

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = LocalStorage('TODOS_V1', [])

    const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')

    /////FILTRAMOS LOS TODOS
    let searchedTodos =[]
    if (!searchValue.length >= 1){
        searchedTodos=todos
    } else {
        searchedTodos=todos.filter(todo=> {
            const todoText = todo.text.toLowerCase() //convertimos a minusculas
            const searchText = searchValue.toLowerCase() //convertimos a minusculas
            return todoText.includes(searchText) //cuales de los todo incluye searchText
        })
    }

    // const addTodos = (text) =>{
    //     const newTodos=[...todos]
    //     newTodos.push({
    //         completed: false,
    //         text,
    //     })
    //     saveTodos(newTodos)
    // }

    return (
        <TodoContext.Provider value={{hamburgerOpen,setHamburgerOpen, searchedTodos, setSearchValue}}>
            {props.children}
        </TodoContext.Provider>
      );
    }

export { TodoContext, TodoProvider }