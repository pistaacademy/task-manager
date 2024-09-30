import './TextArea.scss';


const TextArea = ({placeholder, label, defaultValue, handleTextArea}) => {
    return (
        <div className='text-area-container'>
            <label htmlFor="text-input">{label}</label>
            <textarea 
                id='text-input' 
                className='text-input' 
                placeholder={placeholder} 
                defaultValue={defaultValue}
                onChange={(e) => handleTextArea(e)} 
            />
        </div>
    )
}

export default TextArea;