import ButtonElement from "../ButtonElement/ButtonElement";

function DisplayingElement({ listContainer, setListContainer }) {
    function HandleDisplayedList(todo) {
        const updatedList = listContainer.filter((ele) => ele !== todo);
        setListContainer(updatedList);
    }

    return (
        <ul>
            {listContainer.length > 0 ? (
                listContainer.map((todo) => (
                    <li key={todo}>
                        {todo}
                        <ButtonElement
                            text="X"
                            onButtonClick={() => HandleDisplayedList(todo)}
                        />
                    </li>
                ))
            ) : (
                <p>No items to display</p>
            )}
        </ul>
    );
}

export default DisplayingElement;
