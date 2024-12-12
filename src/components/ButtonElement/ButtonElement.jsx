function ButtonElement ({ onButtonClick, text}) {
    return (
        <>
            <button onClick={onButtonClick}>{text}</button>
        </>
    )
}

export default ButtonElement