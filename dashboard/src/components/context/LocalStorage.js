import React from "react";

function LocalStorage(itemName, initialValie){
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValie) //valor inicial

    React.useEffect(()=>{
        setTimeout(()=>{
            try{
            //localStorage.getItem Devuelve el valor cuando le pasamos el nombre.
            const localStorageItem = localStorage.getItem(itemName)
            let parseItem  //envairemos a local

            //verificar el estado de localStorage
            if (!localStorageItem){
                //Cuando recibe un nombre y valor, lo almacena o actualiza si ya existe.
                localStorage.setItem(itemName, JSON.stringify(initialValie))
                parseItem=initialValie
            }else{
                parseItem=JSON.parse(localStorageItem)
            }
            setItem(parseItem)
            setLoading(false)
        }catch(error){
            setError(error)
        }
        }, 1000)
    })
    const saveItem = (newTodos) => {
        try{
            //Guardar cambios en localStorage
            const stringifiedTodos= JSON.stringify(newTodos)
            localStorage.setItem(itemName, stringifiedTodos)
            setItem(newTodos)
        }catch(error){
            setError(error)
        }
    }
    //retornar arrary con valores
    return{
        item,
        saveItem,
        loading,
        error
    }
}

export {LocalStorage}