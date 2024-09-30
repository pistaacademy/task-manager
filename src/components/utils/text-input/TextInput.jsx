import './TextInput.scss';

const TextInput = ({placeholder, label, defaultValue, handleTextInput}) => {
    return (
        <div className='text-input-container'>
            <label htmlFor="text-input">{label}</label>
            <input 
                id='text-input' 
                className='text-input' 
                placeholder={placeholder} 
                defaultValue={defaultValue}
                onChange={(e) => handleTextInput(e)} 
            />
        </div>
    )
}

export default TextInput;