import './TextArea.scss';


const TextArea = ({placeholder, label, value, handleTextArea}) => {
    return (
        <div className='text-area-container'>
            <label htmlFor="text-input">{label}</label>
            <textarea 
                id='text-input' 
                className='text-input' 
                placeholder={placeholder} 
                value={value}
                onChange={(e) => handleTextArea(e)} 
            />
        </div>
    )
}

export default TextArea;