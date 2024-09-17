import './TextInput.scss';

const TextInput = ({placeholder, label, value, handleTextInput}) => {
    return (
        <div className='text-input-container'>
            <label htmlFor="text-input">{label}</label>
            <input 
                id='text-input' 
                className='text-input' 
                placeholder={placeholder} 
                value={value}
                onChange={(e) => handleTextInput(e)} 
            />
        </div>
    )
}

export default TextInput;