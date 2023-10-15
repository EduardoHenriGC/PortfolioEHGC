import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', contact: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contextValue = {
        formData,  // Certifique-se de que formData está no objeto contextValue
        handleChange,
        setFormData
    };

    return (
        <ContactContext.Provider value={contextValue}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    return useContext(ContactContext);
};
