import React, { useState } from 'react';
import { useContact } from "@/context/ContactContext"
import styles from "@/styles/FormItem/FormItem.module.css"

export default function FormItem({ inputName, text }) {
    const { formData, handleChange } = useContact();
    const isTextArea = inputName === "message";

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputClass = isTextArea ? styles.textarea : styles.input;

    return (
        <div className={styles.Container}>
            <label htmlFor={inputName}></label>
            {isTextArea ? (
                <textarea
                    id={inputName}
                    name={inputName}
                    value={formData[inputName]}
                    onChange={handleChange}
                    placeholder={text}
                    className={`${inputClass} ${isFocused ? styles.select : ''}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            ) : (
                <input
                    type="text"
                    id={inputName}
                    name={inputName}
                    value={formData[inputName]}
                    onChange={handleChange}
                    placeholder={text}
                    className={`${inputClass} ${isFocused ? styles.select : ''}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            )}
        </div>
    );
}
