import React from 'react';
import { useContact } from '@/context/ContactContext';
import ContactForm from '@/components/ContactForm/index';
import axios from 'axios';

export default function ContactFormHooks() {

    const { formData, setFormData } = useContact();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-node-email-one.vercel.app/sendemail', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Mensagem enviada com sucesso!');
                resetForm();




            } else {
                console.log('Ocorreu um erro ao enviar a mensagem.');

            }
        } catch (error) {
            console.error(error);

        }
    };

    const resetForm = () => {
        const emptyFormData = { name: '', email: '', message: '', contact: '' };
        setFormData(emptyFormData);
    };


    return (
        <ContactForm onSubmit={handleFormSubmit} />
    );
}
