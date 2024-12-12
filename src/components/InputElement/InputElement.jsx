function InputElement ({ onTextChange, inputValue }) {
    return (
        <>
            <input 
                type="text" 
                placeholder="Enter your to-do here..." 
                onChange={onTextChange}
                value={inputValue}
            />
        </>
    )
}

export default InputElement