import InputElement from "../InputElement/InputElement"
import ButtonElement from "../ButtonElement/ButtonElement"
import DisplayingElement from "../DisplayingElement/DisplayingElemet";
import { useState } from "react";

function InputFormElement () {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function HandleFormSubmit (event) {
        event.preventDefault();
    }

    function HandleTextBox (event) {
        setTodo(event.target.value);
    }
    
    function HandleButtonClick() {
        if (todo.trim() === "") return;
        console.log("click me!");
        setTodos((prevTodos) => [...prevTodos, todo]);
        setTodo("");
        
    }

    return (
        <form onSubmit={HandleFormSubmit}>
            <div>
                <InputElement onTextChange={HandleTextBox} inputValue={todo}/>
                <ButtonElement onButtonClick={HandleButtonClick} text="Add"/>
            </div>
            <div>
                <DisplayingElement listContainer={todos} setListContainer={setTodos}/>
            </div>
        </form>
    )
}

export default  InputFormElement