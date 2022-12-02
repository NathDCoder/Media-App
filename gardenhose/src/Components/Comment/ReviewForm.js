import { useState } from "react";

const ReviewForm = ({ 
    handleSubmit, 
    submitLabel,
    hasCancelButton = false,
    initialText = '', 
    handleCancel, 
}) => {
    const [text, setText] = useState("initialText")
    const isTextareaDisabled = text.length === 0;
    const onSubmit = event => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return (
        <form onSubmit={onSubmit}>
            <textarea className="review-form-textarea" value={text} onChange={(e) => setText(e.target.value)}/>
            <button className="review-form-button" disabled={isTextareaDisabled}>{submitLabel}</button>
            {hasCancelButton && (
                <button 
                type="button" 
                className="review-form-button review-form-cancel-button"
                onClick={handleCancel}
                >
                Cancel
                </button>
            )}
        </form>
    );
};


export default ReviewForm; 
